import { PageIntro } from '@/components/Sections';
import { ContactForm } from '@/components/ContactForm';
import { members } from '@/data/team';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Contact — Talk to the WeRV Team',
  'Connect with WeRV about agricultural lending, groundwater monitoring, infrastructure, research and partnerships.',
  '/contact',
);
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S TALK"
        title="Better visibility starts with a conversation."
        text="Let’s build better visibility into Earth’s hidden risks. We welcome conversations with prospective partners, researchers, lenders and agencies."
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-people">
            <span className="eyebrow">REACH THE TEAM DIRECTLY</span>
            {[members[1], members[0], members[2]].map((m) => (
              <article key={m.name}>
                <h2>{m.name}</h2>
                <a href={`mailto:${m.email}`}>{m.email}</a>
              </article>
            ))}
            <div className="contact-aside">
              <h3>Early conversations matter.</h3>
              <p>
                We are exploring which decisions Earth intelligence can best support. There is no
                commercial product or live monitoring service available yet.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
