import styled from "styled-components";
import useUploadImages from "../../../hooks/useUploadImages";
import ImagesListing from "./ImagesListing";
import { COLORS } from "../../../helpers/constants/constants";
import { alertSuccess } from "../../global/library/Alert";

// Upload section
const UploadSection = () => {
  const { images, refetch } = useUploadImages(); // Get the upload images

  // Handle change on image input file with postUploadImage
  const handleChangeUploadImage = async (event) => {
    try {
      event.preventDefault(); // Don't reload page

      if (event.target.files[0]) {
        const file = event.target.files[0];

        const formData = new FormData(); // For multipart data
        formData.append("image", file); // Add image to formData

        // postUploadImage
        const result = await fetch("/upload/image", {
          method: "POST",
          body: formData,
        });

        const { data, status, message } = await result.json(); // Get the json response

        if (data) {
          refetch(); // Refetch upload images
          alertSuccess({ message: "Image uploaded" });
        }

        // For status error that don't start with 20x
        if (!status.toString().startsWith("20")) {
          throw new Error(message); // Throw error message
        }
      }
    } catch (err) {
      // Error
      console.error(err.message);
    }
  };

  return (
    <>
      {/* Uploads photos */}
      <UploadButton for="fileInput">
        Upload Image
        <FileInput
          id="fileInput"
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg" // Accept only these extension
          onChange={handleChangeUploadImage}
        />
      </UploadButton>

      {/* Images */}
      <ImagesListing images={images} />
    </>
  );
};

const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  background-color: ${COLORS.primary};
  color: white;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

const FileInput = styled.input`
  position: absolute;
  top: 20px;
  width: 100%;
  min-height: 40px;
  opacity: 0; // Hide it
  cursor: pointer;
`;

export default UploadSection;
