import { Box } from "@material-ui/core";
import logo from "../../Image/edenLogobg.png";

const Heading = () => {
  return (
    <>
      <Box className="logoContainer">
        <img className="logo" src={logo} alt={"logo"} />
        <span className="logoName">Eden</span>
      </Box>
    </>
  );
};

export default Heading;
