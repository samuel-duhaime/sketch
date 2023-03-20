import styled from "styled-components";
import { COLORS } from "../../../helpers/contants/constants";

const SelectOptions = () => {
   return (
      <Select>
         <option value="Nunito">Nunito</option>
         <option value="Quicksand">Quicksand</option>
         <option value="Roboto">Roboto</option>
         <option value="Arial">Arial</option>
      </Select>
   );
};

const Select = styled.select`
   min-width: 170px;
   border-radius: 5px;
   min-height: 32px;
   padding: 0 5px;
   border: 1px solid ${COLORS.gray};
`;

export default SelectOptions;
