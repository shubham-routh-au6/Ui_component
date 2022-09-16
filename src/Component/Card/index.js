import { Box, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const Card = () => {
  return (
    <>
      <Box className="thrdPageCard" id="firstCard">
        <PersonIcon style={{ color: "blue" }} />
        <Typography className="title">For Myself</Typography>
        <p className="caption">
          Write better. Think <br />
          more clearly. Stay <br />
          organised
        </p>
      </Box>
      <Box className="thrdPageCard">
        <SupervisorAccountIcon />
        <Typography className="title">With my team</Typography>
        <p className="caption">
          Wikis, doocs, tasks &<br />
          projects, all in one <br />
          place
        </p>
      </Box>
    </>
  );
};

export default Card;
