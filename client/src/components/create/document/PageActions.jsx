import styled from "styled-components";

const PageActions = ({ width }) => {
   return <PageActionsContainer width={width}>PageActions</PageActionsContainer>;
};

const PageActionsContainer = styled.section`
   display: flex;
   width: ${({ width }) => width + "px"};
`;

export default PageActions;
