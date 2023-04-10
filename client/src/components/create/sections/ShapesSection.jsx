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
    {
      id: 2,
      type: "ellipse",
      radiusX: 50,
      radiusY: 50,
      icon: <CircleShape />,
    },
    {
      id: 3,
      type: "ellipse",
      radiusX: 100,
      radiusY: 50,
      icon: <EllipseShape />,
    },
    {
      id: 4,
      type: "arrow",
      points: [0, 0, 100, 0],
      pointerLength: 20,
      pointerWidth: 20,
      strokeWidth: 10,
      icon: <ArrowShape />,
    },
    {
      id: 5,
      type: "line",
      points: [0, 0, 100, 0],
      strokeWidth: 5,
      icon: <LineShape />,
    },
  ];

  // Function for when the user click the shape button
  const handleShapeClick = ({
    type,
    width,
    height,
    radiusX,
    radiusY,
    points,
    pointerLength,
    pointerWidth,
    strokeWidth,
  }) => {
    postElementAction({
      newData: {
        type,
        x: 100,
        y: 100,
        ...(width && { width }),
        ...(height && { height }),
        ...(radiusX && { radiusX }),
        ...(radiusY && { radiusY }),
        ...(points && { points }),
        ...(pointerLength && { pointerLength }),
        ...(pointerWidth && { pointerWidth }),
        ...(strokeWidth && { strokeWidth }),
        rotation: 0,
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
              handleShapeClick({
                type: shape.type,
                width: shape.width,
                height: shape.height,
                radiusX: shape.radiusX,
                radiusY: shape.radiusY,
                points: shape.points,
                pointerLength: shape.pointerLength,
                pointerWidth: shape.pointerWidth,
                strokeWidth: shape.strokeWidth,
              });
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

const CircleShape = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: black;
`;

const EllipseShape = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
`;

const ArrowShape = styled.div`
  line-height: 24px;

  &::after {
    content: "→";
    font-size: 60px;
  }
`;

const LineShape = styled.div`
  width: 60px;
  height: 2px;
  background-color: black;
`;

export default ShapesSection;
