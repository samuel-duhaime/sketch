import styled from "styled-components";
import useSketchs from "../../hooks/useSketchs";
import SketchCard from "./SketchCard";
import Loading from "../global/loading/Loading";

// Sketchs listing of the SketchCard
const SketchsListing = () => {
  const { sketchs } = useSketchs(); // Get the sketchs

  return (
    <ListingWrapper>
      <ListingTitle>Your recent Sketchs</ListingTitle>
      <Listing>
        {sketchs ? (
          sketchs?.map((sketch) => {
            return (
              <SketchCard
                key={sketch._id}
                sketch={sketch}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </Listing>
    </ListingWrapper>
  );
};

const ListingWrapper = styled.section`
  margin: 30px 0;
  width: 100%;
`;

const ListingTitle = styled.h2`
  text-align: left;
  font-size: 30px;
`;

const Listing = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px 0;
`;

export default SketchsListing;
