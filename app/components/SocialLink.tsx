import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SocialLinkProps {
  icon: IconProp;
  href: string;
  title: string;
}

export default function SocialLink({ icon, href, title }: SocialLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="hover:bg-slate-800 flex h-12 w-12 items-center justify-center rounded-full p-3 text-slate-200 transition-all ease-in-out"
    >
      <FontAwesomeIcon
        fixedWidth
        className="text-3xl"
        icon={icon}
        title={title}
      />
    </a>
  );
}
