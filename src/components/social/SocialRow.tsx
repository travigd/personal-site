import { socials } from "../../config/social.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export const SocialRow = () => {
  return (
    <div className={"social-row"}>
      <SocialIcon icon={faGithub} href={socials.github} />
      <SocialIcon icon={faTwitter} href={socials.twitter} />
      <SocialIcon icon={faLinkedin} href={socials.linkedin} />
      <style jsx>{`
        .social-row {
          display: flex;
          flex-flow: row wrap;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
};

interface SocialIconProps {
  icon: typeof faGithub;
  href: string;
}
const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <>
      <a href={href}>
        <FontAwesomeIcon icon={icon} className={"social-icon"} fixedWidth />
      </a>
      <style jsx>
        {`
          a {
            font-size: 2rem;
            display: block;
          }
          a:not(:first-child) {
            margin-left: 2rem;
          }
        `}
      </style>
    </>
  );
};
