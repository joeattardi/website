import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SocialLink from '~/components/SocialLink';

export default function Index() {
  return (
    <div className="bg-[url('/images/laptop-hero.jpg')] bg-cover bg-center p-4">

      <div className="mx-auto grid grid-cols-1 justify-items-center max-w-7xl items-center gap-4 md:grid-cols-2">
        <img
          className="row-start-2 h-40 w-40 rounded-full border-2 bg-blue-400 shadow-lg shadow-black md:col-start-1 md:row-start-1 md:row-span-2"
          src="/images/joe-profile.png"
          alt="Joe Attardi"
        />

        <div className="flex flex-col items-center row-start-1 md:col-start-2 md:self-end">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Joe Attardi
          </h2>
          <div className="text-white text-xl md:text-xl">
            Software Engineer and Author
          </div>
        </div>

        <div className="flex items-center gap-x-4 row-start-3 md:row-start-2 md:col-start-2">
          <SocialLink
            icon={faEnvelope}
            href="mailto:jattardi@gmail.com"
            title="Email"
          />
          <SocialLink
            icon={faTwitter}
            href="https://twitter.com/joeattardi"
            title="Twitter"
          />
          <SocialLink
            icon={faLinkedin}
            href="https://www.linkedin.com/in/joeattardi/"
            title="LinkedIn"
          />
          <SocialLink
            icon={faGithub}
            href="https://github.com/joeattardi"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
}
