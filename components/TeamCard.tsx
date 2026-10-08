import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa6';
import type { Member } from '@/data/team';
import type { CSSProperties } from 'react';
export function TeamCard({ member, index }: { member: Member; index: number }) {
  return (
    <article
      className="team-card"
      style={{ '--reveal-delay': `${(index + 1) * 100}ms` } as CSSProperties}
    >
      <div className="team-portrait">
        {member.photo ? (
          <Image src={member.photo} alt={member.name} fill sizes="(max-width: 800px) 90vw, 30vw" />
        ) : (
          <>
            <span className="portrait-index">TEAM / 0{index + 1}</span>
            <span className="portrait-initials" aria-hidden="true">
              {member.initials}
            </span>
            <span className="portrait-caption">WeRV / FOUNDING TEAM</span>
          </>
        )}
        <a
          className="portrait-profile"
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${member.name}'s LinkedIn profile`}
        >
          <FaLinkedinIn aria-hidden="true" />
          <span>View profile</span>
        </a>
      </div>
      <div className="team-details">
        <div className="team-name">
          <h2>{member.name}</h2>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name} on LinkedIn`}
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="discipline">{member.discipline}</p>
        <div className="institution">
          {member.institutionLogo && (
            <Image src={member.institutionLogo} width={145} height={34} alt="IIT Kharagpur logo" />
          )}
          <p>{member.institution}</p>
        </div>
        <a className="team-email" href={`mailto:${member.email}`}>
          {member.email}
        </a>
      </div>
    </article>
  );
}
