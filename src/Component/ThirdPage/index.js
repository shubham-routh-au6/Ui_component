import { Box, Typography, Button } from "@material-ui/core";
import Heading from "../Heading";
import Third from "../../Image/thirdPage.png";
import Card from "../Card";
import React from "react";

const ThirdPage = () => {
 
  return (
    <Box className="pageContainer">
      <Box className="pageInnerCon">
        <Heading />
        <Box className="pageTextCon">
          <img className="fstPageCount" src={Third} alt={"onbording"} />
          <Typography className="scndPageHeading">
            How are you planning to use Eden?
          </Typography>
          <Typography className="fstPageSubHeading">
            We'll streamline your setup experience accordingly.
          </Typography>
          <Box className="thirdPgeInputContainer">
            <Card />
          </Box>
          <Button variant="contained" className="thrdPageButton">
            Create Workspace
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdPage;
