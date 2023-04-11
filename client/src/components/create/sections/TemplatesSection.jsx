import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useSketchs from "../../../hooks/useSketchs";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import { useState } from "react";

// Templates Sketch section
const TemplatesSection = () => {
  const [searchSketch, setSearchSketch] = useState(null);
  const { sketchs } = useSketchs(); // Get the sketchs
  const { sketchId } = useParams(); // Get the sketchId

  return (
    <>
      {/* Search */}
      <SearchDiv>
        <FontAwesomeIcon icon="faMagnifyingGlass" />
        <SearchInput
          type="search"
          placeholder="Search your Sketch"
          onChange={(ev) => {
            setSearchSketch(ev.target.value);
          }}
        />
      </SearchDiv>

      {/* Sketchs */}
      <SketchsListingSection>
        {sketchs
          ?.filter((sketch) => {
            // Filter only the relevant Sketch
            if (searchSketch) {
              return (
                sketch?.isShared &&
                sketch?._id !== sketchId &&
                sketch?.sketchName?.toLowerCase().search(searchSketch.toLowerCase()) !== -1
              );
            } else {
              return sketch?.isShared && sketch?._id !== sketchId;
            }
          })
          .map((sketch) => {
            return (
              <LinkImage
                to={"/create/" + sketch?._id}
                key={sketch?._id}
              >
                <SketchImage
                  alt={sketch?.sketchName}
                  src={sketch?.imageUrl}
                />
                <div>{sketch?.sketchName}</div>
              </LinkImage>
            );
          })}
      </SketchsListingSection>
    </>
  );
};

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  height: 40px;
  background-color: white;
  color: black;

  svg {
    font-size: 20px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;

  &::placeholder {
    color: black;
  }
`;

const SketchsListingSection = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const LinkImage = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  color: white;
  text-decoration: none;

  &:is(:hover, :focus) {
    opacity: 0.8;
  }
`;

const SketchImage = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
`;

export default TemplatesSection;
