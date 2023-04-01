import styled from "styled-components";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import PhotosListing from "./PhotosListing";

const PhotosSection = () => {
  return (
    <>
      <SearchDiv>
        <FontAwesomeIcon icon="faMagnifyingGlass" />
        <SearchInput
          type="search"
          placeholder="Search Photos"
        />
      </SearchDiv>
      <PhotosListing />
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

export default PhotosSection;