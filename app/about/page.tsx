import Link from 'next/link';
import { PageIntro, SectionHeading, ContactCTA } from '@/components/Sections';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'About WeRV — Making Hidden Risk Measurable',
  'WeRV is an early-stage research team building satellite intelligence for groundwater stress, aquifer compaction and long-term resilience.',
  '/about',
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT WeRV"
        title="Intelligence for the risks we cannot see."
        text="Groundwater depletion is often approached as an environmental problem. We also see an information problem: institutions cannot act on risks they cannot clearly observe."
      />
      <section className="about-statement dark">
        <div className="container">
          <span className="eyebrow">OUR PURPOSE</span>
          <h2>
            Make invisible environmental
            <br />
            risk <em>measurable.</em>
          </h2>
          <p>
            Turn complex Earth-observation data into useful intelligence for agriculture, credit,
            infrastructure, water resources and long-term regional resilience.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <SectionHeading eyebrow="THE JOURNEY" title="An idea shaped by looking closer." />
          <div>
            <p>
              The journey behind WeRV began roughly two and a half years ago, with a growing
              interest in how Earth observation, geoscience and computation could reveal risks that
              conventional monitoring misses.
            </p>
            <p>
              Today, we are developing a research prototype focused on Punjab and Haryana. The work
              brings together satellite radar, environmental context and ground observations to
              investigate how groundwater stress and land deformation can inform longer-term
              decisions.
            </p>
            <p>
              Our technical approach and market thesis are being tested; we do not yet have
              customers, revenue or external funding.
            </p>
            <Link className="text-link" href="/team">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
      <section className="section methodology">
        <div className="container">
          <SectionHeading eyebrow="HOW WE BUILD" title="Evidence before confidence." />
          <div className="why-grid about-values">
            <article>
              <span className="micro">01 / OPEN METHODS</span>
              <h3>Science that can be examined.</h3>
              <p>
                We aim to share our scientific pipeline and validation methodology, making the work
                useful beyond a commercial product.
              </p>
            </article>
            <article>
              <span className="micro">02 / EXPLICIT UNCERTAINTY</span>
              <h3>Know the limits of the signal.</h3>
              <p>
                We want users to understand what is observed, what is inferred and what has been
                validated.
              </p>
            </article>
            <article>
              <span className="micro">03 / LASTING UTILITY</span>
              <h3>Built for institutional decisions.</h3>
              <p>
                The proposed commercial layer adds maintained risk indices, forecasts, integrations
                and support through subscriptions, APIs and reports.
              </p>
            </article>
          </div>
          <p className="science-note">
            Our longer-term ambition is to extend useful monitoring to cooperatives, smallholders
            and under-resourced agencies through accessible methods and evidence. That impact must
            be earned through validated work.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
