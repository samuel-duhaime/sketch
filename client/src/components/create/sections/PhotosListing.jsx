import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import Loading from "../../global/loading/Loading"

// Grid of all the photos or images
const PhotosListing = ({ images }) => {
  return (
    images ? (<PhotoListingSection>
      {images.map((image) => {
        return <Image key={image._id} src={"/upload/" + image.fileName} alt="Allo" />
      })}
    </PhotoListingSection >) : <Loading theme="dark" />
  );
};

const PhotoListingSection = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const Image = styled.img`
  width: 100%;
  /* height: 130px; */
  background-color: ${COLORS.darkGray};
  border-radius: 10px;
  margin: auto;
`;

export default PhotosListing;
