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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 p-3 text-slate-200 shadow-lg transition-all ease-in-out hover:bg-slate-200 hover:text-slate-800"
    >
      <FontAwesomeIcon
        fixedWidth
        className="text-2xl"
        icon={icon}
        title={title}
      />
    </a>
  );
}
