import { PageIntro, ContactCTA } from '@/components/Sections';
import { TeamCard } from '@/components/TeamCard';
import { members } from '@/data/team';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Team — Earth Science, Engineering and Data',
  'Meet Vishwajeet Sharma, Ayush Ram Gaur and Tanay Katyayan, the team building WeRV at the intersection of Earth science, engineering and data.',
  '/team',
);
export default function Team() {
  return (
    <>
      <PageIntro
        eyebrow="THE TEAM"
        title="Earth science. Engineering. A shared field of view."
        text="Built at the intersection of Earth science, engineering and data. Three perspectives, brought together by a question: what can we learn about the risks beneath the surface?"
      />
      <section className="section">
        <div className="container">
          <div className="team-grid">
            {members.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          <p className="team-note">
            Institutional names describe team members’ educational affiliations. They do not imply
            institutional endorsement of WeRV.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
