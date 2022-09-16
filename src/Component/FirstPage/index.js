import { Button, Box, Typography } from "@material-ui/core";
import Heading from "../Heading";
import First from "../../Image/firstPage.png";
import InputField from "../InputField";

const FirstPage = ({ count }) => {
  return (
    <Box className="pageContainer">
      <Box className="pageInnerCon">
        <Heading />
        <Box className="pageTextCon">
          <img className="fstPageCount" src={First} alt={"onbording"} />
          <Typography className="fstPageHeading">
            Welcome! First things first...{" "}
          </Typography>
          <Typography className="fstPageSubHeading">
            You can always change them later.
          </Typography>
          <InputField name={"Full Name"} placeholder={"Steve Jobs"} />
          <InputField name={"Display Name"} placeholder={"Steve"} />
          <Button variant="contained" className="fstPageButton">
            Create Workspace
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstPage;
