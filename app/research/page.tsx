import Link from 'next/link';
import { PageIntro } from '@/components/Sections';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Research — Notes from the Work',
  'Future WeRV research updates on satellite radar, groundwater stress, validation, datasets and methodology. Research notes coming soon.',
  '/research',
);
export default function Research() {
  return (
    <>
      <PageIntro
        eyebrow="RESEARCH & INSIGHTS"
        title="Show the work."
        text="A place for the methods, experiments and evidence behind our approach."
      />
      <section className="section">
        <div className="container research-empty">
          <span className="micro">FIELD NOTES / 001</span>
          <h2>Research notes coming soon.</h2>
          <p>
            As the research develops, we plan to share NISAR experiments, groundwater observations,
            validation results and methodology notes. No publications or datasets have been released
            here yet.
          </p>
          <div className="research-topics">
            <span>NISAR experiments</span>
            <span>Ground validation</span>
            <span>Methodology</span>
            <span>Open science</span>
          </div>
          <Link href="/technology" className="text-link">
            Explore the research approach
          </Link>
        </div>
      </section>
    </>
  );
}
