export const interests = [
  'Agricultural lending',
  'Groundwater monitoring',
  'Infrastructure',
  'Research',
  'Partnership',
  'Other',
] as const;
export type ContactData = {
  name: string;
  organization: string;
  email: string;
  interest: string;
  message: string;
};
export type ContactErrors = Partial<Record<keyof ContactData, string>>;
export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2 || data.name.length > 100)
    errors.name = 'Enter your name (2–100 characters).';
  if (!data.organization.trim() || data.organization.length > 150)
    errors.organization = 'Enter your organization (up to 150 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) || data.email.length > 254)
    errors.email = 'Enter a valid email address.';
  if (!interests.some((i) => i === data.interest)) errors.interest = 'Choose an area of interest.';
  if (data.message.trim().length < 10 || data.message.length > 5000)
    errors.message = 'Enter a message between 10 and 5,000 characters.';
  return errors;
}
export function cleanContact(data: ContactData): ContactData {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ''),
    ]),
  ) as ContactData;
}
export function emailDraft(data: ContactData): string {
  return `mailto:ayush.ram.gaur@werv.cloud?subject=${encodeURIComponent(`WeRV enquiry — ${data.interest}`)}&body=${encodeURIComponent(`Name: ${data.name}\nOrganization: ${data.organization}\nEmail: ${data.email}\nInterest: ${data.interest}\n\n${data.message}`)}`;
}
// Any connected provider must independently validate, rate-limit and sanitize input server-side.
export async function submitContact(data: ContactData, endpoint: string): Promise<void> {
  const url = new URL(endpoint);
  if (url.protocol !== 'https:') throw new Error('Contact endpoint must use HTTPS.');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cleanContact(data)),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error('The contact service did not accept your message.');
}
