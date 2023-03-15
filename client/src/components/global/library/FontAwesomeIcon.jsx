import { FontAwesomeIcon as FontAwesomeIconReact } from "@fortawesome/react-fontawesome";
import {
   faAngleLeft,
   faRotateLeft,
   faRotateRight,
   faCirclePlus,
   faCircleDown,
   faArrowUpFromBracket,
   faCloudArrowUp,
   faFont,
   faImage,
   faShapes,
} from "@fortawesome/free-solid-svg-icons";

const FontAwesomeIcon = ({ icon }) => {
   let iconComponent;

   // Change the iconComponent
   switch (icon) {
      case "faAngleLeft":
         iconComponent = faAngleLeft;
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
      default:
         iconComponent = faShapes;
   }

   return <FontAwesomeIconReact icon={iconComponent} />;
};

export default FontAwesomeIcon;
