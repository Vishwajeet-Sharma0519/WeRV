export type Member = {
  name: string;
  discipline: string;
  institution: string;
  institutionLogo: string | null;
  photo: string | null;
  linkedin: string;
  email: string;
  initials: string;
};
export const members: Member[] = [
  // Store approved portraits in public/assets/team/ and set photo to /assets/team/<name>.webp.
  // Portraits supplied directly by the team. Null retains the neutral fallback.
  {
    name: 'Vishwajeet Sharma',
    discipline: 'Computer Science & Engineering',
    institution: 'Indian Institute of Technology Kharagpur',
    institutionLogo: '/assets/iit-kharagpur.png',
    photo: '/assets/team/vishwajeet-sharma.jpeg',
    linkedin: 'https://www.linkedin.com/in/vishwajeet-sharma-243a28318/',
    email: 'vishwajeet.sharma@werv.cloud',
    initials: 'VS',
  },
  {
    name: 'Ayush Ram Gaur',
    discipline: 'Geology and Geophysics',
    institution: 'Indian Institute of Technology Kharagpur',
    institutionLogo: '/assets/iit-kharagpur.png',
    photo: '/assets/team/ayush-ram-gaur.png',
    linkedin: 'https://www.linkedin.com/in/ayush-ram-gaur/',
    email: 'ayush.ram.gaur@werv.cloud',
    initials: 'AG',
  },
  {
    name: 'Tanay Katyayan',
    discipline: 'Chemical Engineering',
    institution: 'Indian Institute of Technology Kharagpur',
    institutionLogo: '/assets/iit-kharagpur.png',
    photo: '/assets/team/tanay-katyayan.jpeg',
    linkedin: 'https://www.linkedin.com/in/katyayan-tanay/',
    email: 'tanay.katyayan@werv.cloud',
    initials: 'TK',
  },
];
