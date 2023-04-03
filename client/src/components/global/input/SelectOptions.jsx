import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../context/SketchContext";
import { COLORS } from "../../../helpers/constants/constants";

// Select options for fontFamily
const SelectOptions = () => {
  // Sketch Context
  const {
    selectedElement,
    actions: { patchElementAction },
  } = useContext(SketchContext);

  // Options object
  const options = [
    { id: 1, value: "Arial" },
    { id: 2, value: "Cambria" },
    { id: 3, value: "Calibri" },
    { id: 4, value: "Century Gothic" },
    { id: 5, value: "Comic Sans MS" },
    { id: 6, value: "Courier New" },
    { id: 7, value: "Times New Roman" },
  ];

  return (
    <Select onChange={(e) => patchElementAction({ newData: { fontFamily: e.target.value } })}>
      {options.map((option) => {
        return (
          <option
            key={option.id}
            value={option.value}
            selected={selectedElement.fontFamily === option.value}
          >
            {option.value}
          </option>
        );
      })}
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
