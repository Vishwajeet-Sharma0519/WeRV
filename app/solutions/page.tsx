import Link from 'next/link';
import { PageIntro, ContactCTA } from '@/components/Sections';
import { useCases } from '@/data/useCases';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Solutions — Intelligence for Long-Term Decisions',
  'Proposed groundwater and subsidence intelligence for agricultural lenders, groundwater agencies and future infrastructure applications.',
  '/solutions',
);
export default function Solutions() {
  return (
    <>
      <PageIntro
        eyebrow="SOLUTIONS"
        title="A clearer view of what lies ahead."
        text="Different institutions carry different exposure to the same land. We are building a common intelligence layer around the decisions each needs to make."
      />
      <div className="container solution-nav">
        {useCases.map((u) => (
          <a key={u.id} href={`#${u.id}`}>
            {u.number} / {u.audience}
          </a>
        ))}
      </div>
      <section className="section">
        <div className="container">
          {useCases.map((u) => (
            <article id={u.id} className="use-case" key={u.id}>
              <div className="use-case-heading">
                <span className="eyebrow">
                  {u.number} / {u.priority}
                </span>
                <h2>{u.title}</h2>
                <p>{u.text}</p>
                <span className="use-stage">{u.stage}</span>
              </div>
              <div className="use-case-panel">
                <span className="micro">{u.audience}</span>
                <h3>“{u.question}”</h3>
                <ul>
                  {u.outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <Link
                  href={`/contact?interest=${u.id === 'lending' ? 'Agricultural%20lending' : u.id === 'governance' ? 'Groundwater%20monitoring' : u.id === 'infrastructure' ? 'Infrastructure' : 'Partnership'}`}
                  className="text-link"
                >
                  Discuss this use case
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
