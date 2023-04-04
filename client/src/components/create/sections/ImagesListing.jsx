import styled from "styled-components";
import Loading from "../../global/loading/Loading";
import ImageListing from "./ImageListing";

// Grid of all the photos or images
const ImagesListing = ({ images }) => {
  return images ? (
    <ImagesListingSection>
      {images.map((image) => {
        return (
          <ImageListing
            key={image._id}
            image={image}
          />
        );
      })}
    </ImagesListingSection>
  ) : (
    <Loading theme="dark" />
  );
};

const ImagesListingSection = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export default ImagesListing;
