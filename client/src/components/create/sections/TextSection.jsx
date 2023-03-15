import styled from "styled-components";
import Button from "../../global/button/Button";

const TextSection = () => {
   return (
      <>
         <div>
            <Button size="big">Add text box</Button>
         </div>

         <Buttons>
            <h2>Heading</h2>
            <Button
               size="big"
               color="white"
            >
               Add heading
            </Button>
            <Button
               size="big"
               color="white"
            >
               Add subheading
            </Button>
            <Button
               size="big"
               color="white"
            >
               Add small text
            </Button>
         </Buttons>

         <Buttons>
            <h2>Font family</h2>
            <Button
               size="big"
               color="white"
            >
               Nunito
            </Button>
            <Button
               size="big"
               color="white"
            >
               Quicksand
            </Button>
            <Button
               size="big"
               color="white"
            >
               Roboto
            </Button>
            <Button
               size="big"
               color="white"
            >
               Arial
            </Button>
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
