import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const iconClass = "text-2xl hover:text-red-dark transition-all bSix:text-xl";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex justify-center p-5">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/jacoberick"
        className={iconClass}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/jacob-e-white/"
        className={`${iconClass} mx-16`}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/jacobwhitedev"
        className={iconClass}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </footer>
  );
};

export default Footer;
