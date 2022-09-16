import {
  FormControl,
  FilledInput,
  InputAdornment,
  FormHelperText,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const InputField = ({ placeholder, name, page }) => {
  return (
    <Box className={page === 2 ? "secondPgeInputContainer" : "inputContainer"}>
      <Typography className="inputFieldName" variant={"caption"}>{name}</Typography>
      <input className="inputField" placeholder={placeholder} type="text" />
    </Box>
  );
};

export default InputField;
