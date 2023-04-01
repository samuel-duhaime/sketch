import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../helpers/constants/constants";
import FontAwesomeIcon from "../global/library/FontAwesomeIcon";
import Tippy from "../global/library/Tippy";
import ShareTippySection from "../global/tippySection/ShareTippySection";

// Sketch card for HomePage
const SketchCard = ({ sketch }) => {
  return (
    <SketchCardSection>
      {/* Image */}
      <Link to={"/view/" + sketch?._id}>
        <Image
          src="/assets/images/demoSketch.png"
          alt={sketch.name}
        />
      </Link>

      {/* Name and size */}
      <div>
        <Name to={"/view/" + sketch?._id}>{sketch?.sketchName}</Name>
        <Size>
          {sketch?.page1?.width} x {sketch?.page1?.height}px
        </Size>
      </div>

      {/* Icons */}
      <Icons>
        {/* Download */}
        <Tippy
          content={<div>Download</div>}
          interactive={false}
        >
          <Icon>
            <FontAwesomeIcon icon="faCircleDown" />
          </Icon>
        </Tippy>

        {/* Edit */}
        <Tippy
          content={<div>Edit</div>}
          interactive={false}
        >
          <Link to={"/create/" + sketch?._id}>
            <Icon>
              <FontAwesomeIcon icon="faPenToSquare" />
            </Icon>
          </Link>
        </Tippy>

        {/* Share */}
        <Tippy content={<ShareTippySection sketchId={sketch?._id} />}>
          <Icon>
            <FontAwesomeIcon icon="faArrowUpFromBracket" />
          </Icon>
        </Tippy>
      </Icons>
    </SketchCardSection>
  );
};

const SketchCardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${COLORS.gray};
  border-radius: 10px;
  padding: 20px;
`;

const Name = styled(Link)`
  font-weight: 700;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Size = styled.div`
  opacity: 0.6;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.button`
  border: none;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  &:is(:hover, :focus) {
    scale: 1.3;
  }
`;

export default SketchCard;
