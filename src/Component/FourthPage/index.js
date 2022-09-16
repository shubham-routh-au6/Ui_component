import { Button, Box, Typography } from "@material-ui/core";
import Heading from "../Heading";
import Fourth from "../../Image/fourthPage.png";
import CheckIcon from "@material-ui/icons/Check";

const FourthPage = ({ count }) => {
  return (
    <Box className="pageContainer">
      <Box className="pageInnerCon">
        <Heading />
        <Box className="pageTextCon">
          <img className="fstPageCount" src={Fourth} alt={"onbording"} />
          <Box className="checkIconCon">
          <CheckIcon className="checkIcon" />
          </Box>
          <Typography className="fstPageHeading">
            Congratulations, Eren!
          </Typography>
          <Typography className="frthPageSubHeading">
            You have completed onboarding, you can start using the Eden!
          </Typography>
          <Button variant="contained" className="frthPageButton">
            Launch Eden
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthPage;
