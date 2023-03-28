import styled from "styled-components";
import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";

const PageActions = ({ page }) => {
   return (
      <PageActionsContainer width={page.width}>
         <div>
            <StrongText>Page {page.page}</StrongText> - {page.pageName}
         </div>
         <PageIcons>
            <ButtonIcon>
               <FontAwesomeIcon icon="faAngleUp" />
            </ButtonIcon>
            <ButtonIcon>
               <FontAwesomeIcon icon="faAngleDown" />
            </ButtonIcon>
            <ButtonIcon>
               <FontAwesomeIcon icon="faCopy" />
            </ButtonIcon>
            <ButtonIcon>
               <FontAwesomeIcon icon="faTrashCan" />
            </ButtonIcon>
            <ButtonIcon>
               <FontAwesomeIcon icon="faFileCirclePlus" />
            </ButtonIcon>
         </PageIcons>
      </PageActionsContainer>
   );
};

const PageActionsContainer = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 16px;
   width: ${({ width }) => width + "px"};
`;

const PageIcons = styled.div`
   display: flex;
   gap: 10px;
`;

const StrongText = styled.span`
   font-weight: 700;
`;

export default PageActions;
