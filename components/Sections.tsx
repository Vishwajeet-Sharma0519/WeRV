import Link from 'next/link';
export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro container">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <div className="eyebrow">A SHARED FIELD OF VIEW</div>
          <h2>
            Better decisions begin
            <br />
            with better visibility.
          </h2>
        </div>
        <div>
          <p>
            Building the next layer of Earth intelligence takes different perspectives. Bring yours.
          </p>
          <Link href="/contact" className="button primary">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
