import { PageIntro } from '@/components/Sections';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Privacy Notice',
  'How the WeRV website handles contact information, email drafts and technical website data.',
  '/privacy',
);
export default function Privacy() {
  const connected = Boolean(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim());
  return (
    <>
      <PageIntro
        eyebrow="PRIVACY"
        title="A clear view of your information."
        text="Website privacy notice · Updated 8 October 2026"
      />
      <section className="section">
        <div className="container prose">
          <h2>Contact information</h2>
          <p>
            {connected
              ? 'When you submit the contact form, your name, organization, email address, selected interest and message are sent to our configured contact service so the team can respond.'
              : 'The contact form prepares an email draft in your browser. It does not submit or store your details on a WeRV server. Opening the draft passes the details you entered to your chosen email application. You decide whether to send it.'}
          </p>
          <p>
            If you email us, your message and contact details are processed through email services
            so that we can respond and manage the conversation. Do not include confidential
            financial records or sensitive personal data.
          </p>
          <h2>Website operation</h2>
          <p>
            This website does not include advertising trackers or analytics in its application code.
            Fonts and images are hosted with the website. The hosting provider may process technical
            request information, such as IP addresses and browser details, to deliver and secure the
            site.
          </p>
          <h2>External links</h2>
          <p>
            Links to LinkedIn, research sources and other websites take you to services with their
            own privacy practices. WeRV does not control those services.
          </p>
          <h2>Your requests</h2>
          <p>
            For questions about information you have shared, or to request access, correction or
            deletion, contact{' '}
            <a href="mailto:ayush.ram.gaur@werv.cloud">ayush.ram.gaur@werv.cloud</a>. Requests will
            be considered in light of applicable obligations and the information we hold.
          </p>
          <h2>Changes</h2>
          <p>
            This notice should be updated when website data-handling practices change, including the
            introduction of analytics or a new contact service.
          </p>
        </div>
      </section>
    </>
  );
}
