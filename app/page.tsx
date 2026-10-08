import Link from 'next/link';
import { SignalArt } from '@/components/SignalArt';
import { Hero } from '@/components/Hero';
import { Dashboard } from '@/components/Dashboard';
import { RegionMap } from '@/components/RegionMap';
import { SectionHeading, ContactCTA } from '@/components/Sections';
import { steps } from '@/data/methodology';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Satellite Intelligence for Groundwater & Subsidence Risk');
const problems = [
  [
    '01',
    'Falling groundwater',
    'Deeper water tables make irrigation harder and pumping more expensive.',
    '↓',
  ],
  [
    '02',
    'Aquifer compaction',
    'Beyond critical stress, compaction can permanently reduce storage capacity.',
    '≋',
  ],
  ['03', 'Land subsidence', 'Small movements at the surface can reveal changes far below it.', '⌁'],
  [
    '04',
    'Financial exposure',
    'A deteriorating irrigation base can weaken the long-term resilience of agricultural assets.',
    '↘',
  ],
];
export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <section className="signal-strip">
        <div className="container">
          <span>SEE DEEPER. THINK FURTHER.</span>
          <p>
            Groundwater stress <b>/</b> Land subsidence <b>/</b> Long-term risk
          </p>
          <span className="stage-label">EARTH SCIENCE × MACHINE INTELLIGENCE</span>
        </div>
      </section>
      <section id="problem" className="section paper">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="01 / THE INVISIBLE PROBLEM"
              title="The most important risks are often invisible."
            />
            <p>
              Over-extraction is structural, not just seasonal. A healthy-looking crop can conceal a
              weakening groundwater base.
            </p>
          </div>
          <div className="earth-story">
            <div>
              <span className="micro">A CONNECTED SYSTEM</span>
              <h3>
                What happens below
                <br />
                changes everything above.
              </h3>
              <p>
                Land. Water. Infrastructure. One connected landscape, seen through a different lens.
              </p>
            </div>
            <SignalArt variant="terrain" />
          </div>
          <div className="problem-grid">
            {problems.map(([num, title, text, symbol]) => (
              <article className="problem-item" key={title}>
                <div className="problem-symbol" aria-hidden="true">
                  {symbol}
                </div>
                <span className="micro">{num} /</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="comparison">
            <div>
              <span className="micro">CONVENTIONAL VIEW</span>
              <p>
                Point measurements <span>→</span> Delayed understanding <span>→</span> Reactive
                decisions
              </p>
            </div>
            <div>
              <span className="micro">THE WeRV APPROACH</span>
              <p>
                Spatial observations <span>→</span> Risk trajectories <span>→</span> Earlier
                decisions
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="02 / THE INTELLIGENCE LAYER"
              title="From satellite signals to decisions."
            />
            <p>
              We are building an Aquifer Stress & Subsidence Risk Index: block-level intelligence
              with a 6–12 month outlook, designed for dashboards, APIs and evidence packs.
            </p>
          </div>
          <Dashboard />
          <div className="steps-grid">
            {steps.map((s, i) => (
              <article key={s.title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
          <p className="science-note">
            Every proposed output is designed to carry its uncertainty and validation status.
            Deformation is one signal—not a direct measurement of groundwater.
          </p>
        </div>
      </section>
      <section className="section paper">
        <div className="container">
          <div className="split-heading">
            <SectionHeading eyebrow="03 / THE OPPORTUNITY" title="A new field of view." />
            <p>
              Better observations. Richer context. A growing need to understand what happens beneath
              the land.
            </p>
          </div>
          <div className="why-grid">
            <article>
              <SignalArt variant="orbit" />
              <span className="micro">NEW SATELLITE CAPABILITY</span>
              <h3>Looking through vegetation.</h3>
              <p>
                NISAR’s L-band radar offers an opportunity to study surface deformation in
                agricultural landscapes. Our research tests that opportunity against ground
                evidence.
              </p>
            </article>
            <article>
              <SignalArt variant="layers" />
              <span className="micro">MULTI-SOURCE INTELLIGENCE</span>
              <h3>Signals become context.</h3>
              <p>
                Radar, water-storage trends, land cover and surface-water observations can inform a
                more complete stress model.
              </p>
            </article>
            <article>
              <SignalArt variant="horizon" />
              <span className="micro">LONGER DECISION HORIZONS</span>
              <h3>Beyond the next season.</h3>
              <p>
                Lenders and agencies need to understand persistent water stress alongside seasonal
                crop conditions and field verification.
              </p>
            </article>
          </div>
          <p className="art-caption">Conceptual illustrations · Not measured satellite data</p>
          <Link className="text-link" href="/technology">
            Read about our research approach
          </Link>
        </div>
      </section>
      <section className="section focus-section">
        <div className="container focus-grid">
          <div>
            <SectionHeading
              eyebrow="04 / INITIAL GEOGRAPHIC FOCUS"
              title="Starting where the signal matters most."
              text="Punjab and Haryana are our initial research focus: agricultural regions where groundwater stress makes long-term visibility especially important."
            />
            <div className="region-labels">
              <span>01 / Punjab</span>
              <span>02 / Haryana</span>
            </div>
            <p className="muted">
              First, establish the evidence here. Then explore Rajasthan, other stressed regions of
              India and, over time, international groundwater basins.
            </p>
            <Link className="text-link" href="/technology">
              Explore the science
            </Link>
          </div>
          <RegionMap />
        </div>
      </section>
      <section className="section paper">
        <div className="container">
          <SectionHeading
            eyebrow="05 / BUILT AROUND REAL DECISIONS"
            title="The land connects us. The decisions are different."
          />
          <div className="audience-grid">
            <Link href="/solutions#lending">
              <span className="micro">FIRST FOCUS</span>
              <h3>
                Agricultural
                <br />
                lending
              </h3>
              <p>A longer view of land and irrigation risk across a portfolio.</p>
              <span className="text-link">Explore lending</span>
            </Link>
            <Link href="/solutions#governance">
              <span className="micro">SECOND PRIORITY</span>
              <h3>
                Groundwater
                <br />
                governance
              </h3>
              <p>Spatial evidence to help prioritize monitoring and investigation.</p>
              <span className="text-link">Explore governance</span>
            </Link>
            <Link href="/solutions#infrastructure">
              <span className="micro">FUTURE APPLICATIONS</span>
              <h3>
                Resilient
                <br />
                infrastructure
              </h3>
              <p>Understanding deformation along the systems that depend on land.</p>
              <span className="text-link">Explore infrastructure</span>
            </Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
