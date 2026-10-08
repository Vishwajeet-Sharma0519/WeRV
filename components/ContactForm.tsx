'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  cleanContact,
  emailDraft,
  interests,
  submitContact,
  validateContact,
  type ContactData,
  type ContactErrors,
} from '@/lib/contact';
const empty: ContactData = { name: '', organization: '', email: '', interest: '', message: '' };
export function ContactForm() {
  const [data, setData] = useState<ContactData>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'prepared' | 'error'>('idle');
  const [draft, setDraft] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('interest');
    if (interest && interests.some((i) => i === interest)) setData((d) => ({ ...d, interest }));
  }, []);
  function change(key: keyof ContactData, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setStatus('idle');
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = cleanContact(data);
    const nextErrors = validateContact(normalized);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!endpoint) {
      setDraft(emailDraft(normalized));
      setStatus('prepared');
      return;
    }
    setStatus('sending');
    try {
      await submitContact(normalized, endpoint);
      setStatus('sent');
      setData(empty);
    } catch {
      setStatus('error');
    }
  }
  const fieldProps = (key: keyof ContactData) => ({
    id: key,
    name: key,
    value: data[key],
    'aria-invalid': !!errors[key],
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      change(key, e.target.value),
  });
  return (
    <form ref={form} onSubmit={submit} noValidate className="contact-form">
      <div className="form-heading">
        <h2>Start a conversation.</h2>
        <p>
          {endpoint
            ? 'Tell us what you are working on.'
            : 'Prepare an email to the team. Nothing is sent or stored by this form.'}
        </p>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">
            Name <span>(required)</span>
          </label>
          <input {...fieldProps('name')} autoComplete="name" maxLength={100} required />
          {errors.name && (
            <span className="field-error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="organization">
            Organization <span>(required)</span>
          </label>
          <input
            {...fieldProps('organization')}
            autoComplete="organization"
            maxLength={150}
            required
          />
          {errors.organization && (
            <span className="field-error" id="organization-error">
              {errors.organization}
            </span>
          )}
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="email">
          Email <span>(required)</span>
        </label>
        <input
          {...fieldProps('email')}
          type="email"
          autoComplete="email"
          maxLength={254}
          required
        />
        {errors.email && (
          <span className="field-error" id="email-error">
            {errors.email}
          </span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="interest">
          What are you interested in? <span>(required)</span>
        </label>
        <select {...fieldProps('interest')} required>
          <option value="">Select an area</option>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        {errors.interest && (
          <span className="field-error" id="interest-error">
            {errors.interest}
          </span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="message">
          Message <span>(required)</span>
        </label>
        <textarea {...fieldProps('message')} rows={5} maxLength={5000} required />
        {errors.message && (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        )}
      </div>
      <p className="form-disclosure">
        Please avoid confidential financial or personal data. Read our{' '}
        <Link href="/privacy">privacy notice</Link>.
      </p>
      <button className="button primary" disabled={status === 'sending'} type="submit">
        {status === 'sending' ? 'Sending…' : endpoint ? 'Send message' : 'Prepare email'}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === 'prepared' && (
          <div className="form-result">
            <strong>Your email draft is ready.</strong>
            <p>
              Open it in your email app, review it and press Send there. No message has been sent by
              this website.
            </p>
            <a href={draft} className="text-link">
              Open email draft
            </a>
          </div>
        )}
        {status === 'sent' && (
          <div className="form-result">
            <strong>Your message was accepted by the contact service.</strong>
            <p>Thank you for getting in touch.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="form-result error" role="alert">
            <strong>We could not confirm your submission.</strong>
            <p>
              Your text is still here. Try again or email{' '}
              <a href="mailto:ayush.ram.gaur@werv.cloud">ayush.ram.gaur@werv.cloud</a>.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
