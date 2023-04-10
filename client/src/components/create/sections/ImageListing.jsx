import { useContext } from "react";
import { useImageSize } from "react-image-size";
import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import Loading from "../../global/loading/Loading";

const ImageListing = ({ image }) => {
  // Sketch Context
  const {
    actions: { postElementAction },
  } = useContext(SketchContext);

  // Get the image size dimensions
  const [dimensions, { loading }] = useImageSize("http://localhost:3000/upload/" + image.fileName);

  // When the Image is click
  const handleImageAction = ({ imageUrl, width, height }) => {
    postElementAction({
      newData: {
        type: "image",
        imageUrl,
        x: 100,
        y: 100,
        width,
        height,
        rotation: 0,
      },
    });
  };

  return !loading ? (
    <Image
      key={image._id}
      src={"/upload/" + image.fileName}
      alt=""
      onClick={() =>
        handleImageAction({
          imageUrl: "http://localhost:3000/upload/" + image.fileName,
          width: 200,
          height: (dimensions.height / dimensions.width) * 200, // Kept the ratio
        })
      }
    />
  ) : (
    <Loading theme="dark" />
  );
};

const Image = styled.img`
  width: 100%;
  background-color: ${COLORS.darkGray};
  border-radius: 10px;
  margin: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default ImageListing;
