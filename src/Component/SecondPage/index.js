import { Box, Button, Typography } from "@material-ui/core";
import Heading from "../Heading";
import Second from "../../Image/secondPage.png";
import InputField from "../InputField";

const SecondPage = () => {
  return (
    <Box className="pageContainer">
      <Box className="pageInnerCon">
        <Heading />
        <Box className="pageTextCon">
          <img className="fstPageCount" src={Second} alt={"onbording"} />
          <Typography className="scndPageHeading">
            Let's set up a home for all your work
          </Typography>
          <Typography className="fstPageSubHeading">
            You can always create another workspace later.
          </Typography>
          <InputField name={"Workspace Name"} placeholder={"Eden"} page={2} />
          <Box className="secondPgeInputContainer">
            <label className="urlLabel" >Workspace URL</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text inputField" id="basic-addon3">
                  www.eden.com/
                </span>
              </div>
              <input
                type="text"
                className="form-control inputField"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Example"
              />
            </div>
          </Box>
          <Button variant="contained" className="scndPageButton">
            Create Workspace
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondPage;
