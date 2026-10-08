import Link from 'next/link';
import { PageIntro } from '@/components/Sections';
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404 / OUTSIDE OUR FIELD OF VIEW"
        title="This page isn’t here."
        text="Return to the homepage or get in touch with the team."
      />
      <div className="container section">
        <Link href="/" className="button primary">
          Back to WeRV
        </Link>
      </div>
    </>
  );
}
