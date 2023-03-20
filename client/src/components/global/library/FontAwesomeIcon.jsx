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
   faAlignCenter,
   faLayerGroup,
   faCopy,
   faTrashCan,
   faFileCirclePlus,
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
      default:
         iconComponent = faShapes;
   }

   return <FontAwesomeIconReact icon={iconComponent} />;
};

export default FontAwesomeIcon;
