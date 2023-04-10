import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../../global/context/SketchContext";
import Button from "../../global/button/Button";

const TextSection = () => {
  // Sketch Context
  const {
    actions: { postElementAction },
  } = useContext(SketchContext);

  // Font Family buttons
  const fontFamilyButtons = [
    "Arial",
    "Cambria",
    "Calibri",
    "Century Gothic",
    "Comic Sans MS",
    "Courier New",
    "Times New Roman",
  ];

  // Function for when the user click the text button
  const handleTextClick = ({ text, size, fontFamily, fontSize, isBold }) => {
    postElementAction({
      newData: {
        type: "text",
        text,
        x: 100,
        y: 100,
        width: size,
        height: size,
        rotation: 0,
        fontFamily,
        fontSize,
        color: "#000000",
        isBold,
        isItalic: false,
        isUnderline: false,
        isUppercase: false,
        align: "left",
      },
    });
  };

  const headingButtons = [
    {
      text: "Add heading",
      size: 300,
      fontSize: 40,
      isBold: true,
    },
    {
      text: "Add subheading",
      size: 250,
      fontSize: 30,
      isBold: false,
    },
    {
      text: "Add body text",
      size: 120,
      fontSize: 16,
      isBold: false,
    },
  ];

  // onClick={() => handleTextClick({ text: "Add subheading", size: 250, fontFamily: "Arial", fontSize: 30 })}
  return (
    <>
      <div>
        <Button
          size="big"
          onClick={() => handleTextClick({ text: "Add text box", size: 140, fontFamily: "Arial", fontSize: 20 })}
        >
          Add text box
        </Button>
      </div>

      <Buttons>
        {/* Heading */}
        <h2>Heading</h2>
        {headingButtons.map((button) => {
          return (
            <Button
              key={button.text}
              size="big"
              color="white"
              onClick={() =>
                handleTextClick({
                  text: button.text,
                  size: button.size,
                  fontFamily: "Arial",
                  fontSize: button.fontSize,
                  isBold: button.isBold,
                })
              }
            >
              {button.text}
            </Button>
          );
        })}
      </Buttons>

      <Buttons>
        {/* Font Family */}
        <h2>Font family</h2>

        {fontFamilyButtons.map((button) => {
          return (
            <Button
              key={button}
              size="big"
              color="white"
              onClick={() =>
                handleTextClick({ text: button, size: 180, fontFamily: button, fontSize: 20, isBold: false })
              }
            >
              {button}
            </Button>
          );
        })}
      </Buttons>
    </>
  );
};

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin: 10px 0;
  }
`;

export default TextSection;
