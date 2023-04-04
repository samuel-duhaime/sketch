import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../../global/context/SketchContext";
import { COLORS } from "../../../helpers/constants/constants";

// Shapes section
const ShapesSection = () => {
  // Sketch Context
  const {
    actions: { postElementAction },
  } = useContext(SketchContext);

  // Shapes buttons
  const shapes = [
    {
      id: 0,
      type: "rectangle",
      width: 200,
      height: 100,
      icon: <RectangularShape />,
    },
    {
      id: 1,
      type: "rectangle",
      width: 200,
      height: 200,
      icon: <SquareShape />,
    },
    // {
    //   id: 2,
    //   icon: <CircleShape />,
    // },
  ];

  // Function for when the user click the shape button
  const handleShapeClick = ({ type, width, height }) => {
    postElementAction({
      newData: {
        type,
        x: 100,
        y: 100,
        width,
        height,
        backgroundColor: "#000000",
      },
    });
  };

  return (
    <PhapesListing>
      {/* Shapes */}
      {shapes.map((shape) => {
        return (
          <ShapeDiv
            key={shape.id}
            onClick={() => {
              handleShapeClick({ type: shape.type, width: shape.width, height: shape.height });
            }}
          >
            {shape.icon}
          </ShapeDiv>
        );
      })}
    </PhapesListing>
  );
};

const PhapesListing = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ShapeDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 97px;
  background-color: ${COLORS.darkGray};
  border-radius: 10px;
  cursor: pointer;

  &:is(:hover, :focus) {
    opacity: 0.9;
  }
`;

const SquareShape = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
`;

const RectangularShape = styled.div`
  width: 60px;
  height: 30px;
  background-color: black;
`;

// const CircleShape = styled.div`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   background-color: black;
// `;

export default ShapesSection;
