import styled from "styled-components";

const Loading = ({ theme = "light" }) => {
  return (
    <CenterDiv>
      <TextDiv theme={theme}>Please wait...</TextDiv>
      <Spinner theme={theme} />
    </CenterDiv>
  );
};

const CenterDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TextDiv = styled.div`
  color: ${(props) => (props.theme === "light" ? "black;" : "white;")};
`;

// Create a CSS spinner
const Spinner = styled.div`
  position: relative;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: "";
    box-sizing: border-box; // Include padding and border in element total width and height
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-right: 2px solid transparent;
    border-top: ${(props) => (props.theme === "light" ? "2px solid black" : "2px solid white")};
    animation: spinner 0.6s linear infinite; // Infinite spinner animation
  }
`;

export default Loading;
