import styled from "styled-components";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import ImagesListing from "./ImagesListing";

const PhotosSection = () => {
  return (
    <>
      {/* Search */}
      <SearchDiv>
        <FontAwesomeIcon icon="faMagnifyingGlass" />
        <SearchInput
          type="search"
          placeholder="Search Photos"
        />
      </SearchDiv>

      {/* Images */}
      <ImagesListing />
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
