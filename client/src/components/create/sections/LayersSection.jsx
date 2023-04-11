import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../../global/context/SketchContext";
import FontAwesomeIcon from "../../../components/global/library/FontAwesomeIcon";
import { COLORS } from "../../../helpers/constants/constants";

const LayersSection = () => {
  // Sketch Context
  const {
    sketch,
    selectedPageId,
    actions: { patchPageAction },
  } = useContext(SketchContext);

  return (
    <Elements>
      {sketch[selectedPageId]?.elements?.map((element, index) => {
        return !element?.isDelete ? (
          <Element>
            <ElementInfo>
              {element.type === "text" ? (
                <Text color={element.color}>{element.text}</Text>
              ) : element.type === "image" ? (
                <Image
                  alt=""
                  src={element.imageUrl}
                />
              ) : element.type === "rectangle" ? (
                <Rectangle
                  backgroundColor={element.backgroundColor}
                  width={(element.width / element.height) * 30}
                />
              ) : element.type === "ellipse" ? (
                <Ellipse
                  backgroundColor={element.backgroundColor}
                  width={(element.radiusX / element.radiusY) * 30}
                />
              ) : element.type === "arrow" ? (
                <Arrow
                  backgroundColor={element.backgroundColor}
                  rotation={element.rotation + "deg"}
                />
              ) : element.type === "line" ? (
                <Line
                  backgroundColor={element.backgroundColor}
                  rotation={element.rotation + "deg"}
                />
              ) : null}
            </ElementInfo>
            <Buttons>
              <Button
                disabled={index < sketch[selectedPageId].elements.length - 1 ? false : true}
                onClick={() => patchPageAction({ pageAction: "moveElementUp", elementId: element._id })}
              >
                <FontAwesomeIcon icon="faAngleUp" />
              </Button>
              <Button
                disabled={index > 0 ? false : true}
                onClick={() => patchPageAction({ pageAction: "moveElementDown", elementId: element._id })}
              >
                <FontAwesomeIcon icon="faAngleDown" />
              </Button>
            </Buttons>
          </Element>
        ) : null;
      })}
    </Elements>
  );
};

const Elements = styled.section`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
`;

const Element = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  background-color: ${COLORS.gray};
  color: black;
`;

const ElementInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${COLORS.gray};
  cursor: pointer;
  font-size: 18px;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):is(:hover, :focus) {
    background-color: ${COLORS.darkGray};
  }
`;

const Text = styled.div`
  text-align: center;
  color: ${(props) => props.color && props.color};
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const Rectangle = styled.div`
  width: ${(props) => props.width && props.width + "px"};
  height: 30px;
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
`;

const Ellipse = styled.div`
  width: ${(props) => props.width && props.width + "px"};
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
`;

const Arrow = styled.div`
  line-height: 24px;
  transform: rotate(${(props) => props.rotation && props.rotation});

  &::after {
    content: "→";
    font-size: 30px;
    color: ${(props) => props.backgroundColor && props.backgroundColor};
  }
`;

const Line = styled.div`
  height: 3px;
  width: 30px;
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
  transform: rotate(${(props) => props.rotation && props.rotation});
`;

export default LayersSection;
