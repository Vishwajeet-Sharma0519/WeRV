import { PageIntro, SectionHeading, ContactCTA } from '@/components/Sections';
import { TechnologyEngine } from '@/components/TechnologyEngine';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Technology — Reading the Earth in Layers',
  'Explore how WeRV is developing a fused risk model using NISAR, Sentinel-1, water-storage context, satellite embeddings and ground observations.',
  '/technology',
);
export default function Technology() {
  return (
    <>
      <PageIntro
        eyebrow="OUR TECHNOLOGY"
        title="Reading the Earth in layers."
        text="No single satellite tells the whole story. Our approach brings surface motion, water-storage trends and land-use context together—and tests them against the ground."
      />
      <section className="section dark">
        <div className="container">
          <TechnologyEngine />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="SCIENTIFIC DEPTH, PRACTICAL OUTPUTS"
              title="What makes WeRV different?"
            />
            <p>
              The proposed advance is not simply using satellite imagery. It is translating a
              specific combination of physical signals into a validated, forward-looking risk
              product.
            </p>
          </div>
          <div className="numbered-list">
            {[
              [
                'Agricultural coherence',
                'Investigate the value of NISAR L-band observations in vegetated agricultural regions, alongside a Sentinel-1 benchmark.',
              ],
              [
                'Physical context',
                'Interpret deformation with water-storage and vegetation information, rather than treating every movement as groundwater loss.',
              ],
              [
                'Forward-looking trajectories',
                'Develop 6–12 month stress outlooks and backtest them against held-out periods.',
              ],
              [
                'Validation by design',
                'Compare with well and available GNSS observations. Show uncertainty and validation status with each proposed output.',
              ],
              [
                'Decision-ready evidence',
                'Package index layers, forecasts and method notes for lenders and agencies.',
              ],
            ].map(([title, text], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section methodology">
        <div className="container two-column">
          <SectionHeading
            eyebrow="WHAT WE NEED TO PROVE"
            title="Small signals. A high standard of evidence."
          />
          <div>
            <p>
              Ground deformation in our initial research regions can be subtle. Surface movement
              alone cannot establish groundwater depletion or irreversible aquifer compaction.
            </p>
            <p>
              Our research focuses on signal quality, local calibration and reproducibility before
              any commercial claims. Forecasts remain a research objective, not a demonstrated
              capability.
            </p>
            <p>
              WeRV is building a decision-intelligence layer on Earth observation and ground-truth
              data. Model outputs are designed to carry uncertainty and validation status rather
              than hide them.
            </p>
            <a
              className="text-link"
              href="https://www.jpl.nasa.gov/press-kits/nisar/mission-overview/science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NISAR science / NASA JPL
            </a>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
