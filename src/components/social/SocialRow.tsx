import socials from "../../config/social.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export const SocialRow = () => {
  return (
    <div className="flex flex-wrap space-x-4">
      <SocialIcon label="Twitter" icon={faTwitter} href={socials.twitter} />
      <SocialIcon label="GitHub" icon={faGithub} href={socials.github} />
      <SocialIcon label="LinkedIn" icon={faLinkedin} href={socials.linkedin} />
    </div>
  );
};

interface SocialIconProps {
  icon: typeof faGithub;
  href: string;
  label: string;
}
const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  return (
    <>
      <a href={href} aria-label={label} className="block text-inherit text-4xl">
        <FontAwesomeIcon icon={icon} className={"social-icon"} fixedWidth />
      </a>
    </>
  );
};
