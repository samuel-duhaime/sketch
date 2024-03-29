import { FontAwesomeIcon as FontAwesomeIconReact } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleUp,
  faAngleDown,
  faRotateLeft,
  faRotateRight,
  faCirclePlus,
  faCircleDown,
  faArrowUpFromBracket,
  faCloudArrowUp,
  faFont,
  faImage,
  faShapes,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faLayerGroup,
  faCopy,
  faTrashCan,
  faFileCirclePlus,
  faPenToSquare,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";

const FontAwesomeIcon = ({ icon }) => {
  let iconComponent;

  // Change the iconComponent
  switch (icon) {
    case "faAngleLeft":
      iconComponent = faAngleLeft;
      break;
    case "faAngleUp":
      iconComponent = faAngleUp;
      break;
    case "faAngleDown":
      iconComponent = faAngleDown;
      break;
    case "faRotateLeft":
      iconComponent = faRotateLeft;
      break;
    case "faRotateRight":
      iconComponent = faRotateRight;
      break;
    case "faCirclePlus":
      iconComponent = faCirclePlus;
      break;
    case "faCircleDown":
      iconComponent = faCircleDown;
      break;
    case "faArrowUpFromBracket":
      iconComponent = faArrowUpFromBracket;
      break;
    case "faFont":
      iconComponent = faFont;
      break;
    case "faShapes":
      iconComponent = faShapes;
      break;
    case "faImage":
      iconComponent = faImage;
      break;
    case "faCloudArrowUp":
      iconComponent = faCloudArrowUp;
      break;
    case "faAlignLeft":
      iconComponent = faAlignLeft;
      break;
    case "faAlignRight":
      iconComponent = faAlignRight;
      break;
    case "faAlignCenter":
      iconComponent = faAlignCenter;
      break;
    case "faLayerGroup":
      iconComponent = faLayerGroup;
      break;
    case "faCopy":
      iconComponent = faCopy;
      break;
    case "faTrashCan":
      iconComponent = faTrashCan;
      break;
    case "faFileCirclePlus":
      iconComponent = faFileCirclePlus;
      break;
    case "faPenToSquare":
      iconComponent = faPenToSquare;
      break;
    case "faChevronLeft":
      iconComponent = faChevronLeft;
      break;
    case "faChevronRight":
      iconComponent = faChevronRight;
      break;
    case "faMagnifyingGlass":
      iconComponent = faMagnifyingGlass;
      break;
    case "faTableCellsLarge":
      iconComponent = faTableCellsLarge;
      break;
    default:
      iconComponent = faShapes;
  }

  return <FontAwesomeIconReact icon={iconComponent} />;
};

export default FontAwesomeIcon;
