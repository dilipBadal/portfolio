import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowRight, faCopy, faEnvelope, faLocationDot, faMoon, faSun, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const icons = { arrow: faArrowUpRightFromSquare, right: faArrowRight, copy: faCopy, email: faEnvelope, pin: faLocationDot, moon: faMoon, sun: faSun, github: faGithub, linkedin: faLinkedin, check: faCheck };
export default function Icon({ name, ...props }) { return <FontAwesomeIcon icon={icons[name]} aria-hidden="true" {...props} />; }
