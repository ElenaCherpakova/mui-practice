import { makeStyles } from "@mui/styles";
import { theme } from "../theme";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export default function RightBar() {
  const classes = useStyles();
  return (
    <>
 HELLO
    </>
  );
}
