import { PageIntro } from '@/components/Sections';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Website Terms',
  'Scope and limitations of the WeRV research-stage website and its conceptual product visualizations.',
  '/terms',
);
export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE TERMS"
        title="Context for using this website."
        text="Updated 8 October 2026"
      />
      <section className="section">
        <div className="container prose">
          <h2>Research-stage information</h2>
          <p>
            This website describes WeRV’s proposed technology, product direction and research
            program. Planned capabilities and milestones are not claims of completed validation or
            commercial availability.
          </p>
          <h2>Illustrative material</h2>
          <p>
            Dashboard previews, trajectories and regional schematics are concepts. They are not live
            measurements, administrative boundary maps, verified forecasts or location-specific risk
            assessments. No accuracy or outcome is guaranteed.
          </p>
          <h2>Decision-making</h2>
          <p>
            Website content is general information and is not financial, legal, insurance or
            engineering advice. It is not a basis for individual lending, regulatory, safety or
            investment decisions. Any future service would require separate terms and an assessment
            of its suitability.
          </p>
          <h2>Names and external sources</h2>
          <p>
            Satellite mission names, institutional names and third-party marks belong to their
            respective owners. Their appearance does not imply a partnership or endorsement.
            External sources are provided for context and remain under their owners’ control.
          </p>
          <h2>Contact</h2>
          <p>
            Questions or corrections can be sent to{' '}
            <a href="mailto:vishwajeet.sharma@werv.cloud">vishwajeet.sharma@werv.cloud</a>.
          </p>
        </div>
      </section>
    </>
  );
}
