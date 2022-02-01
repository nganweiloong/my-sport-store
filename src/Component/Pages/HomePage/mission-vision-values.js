import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faBars,
  faBookReader,
  faCartPlus,
  faPeopleArrows,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const mvv = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faUserCircle} size="2x" className="article-icon" />
    ),
    title: "Mission",
    content: "",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faBalanceScale}
        size="2x"
        className="article-icon"
      />
    ),
    title: "Vision",
    content: "",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon icon={faBookReader} size="2x" className="article-icon" />
    ),
    title: "Value",
    content: "",
  },
];
