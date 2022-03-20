import Post from "./Post";

import { makeStyles } from "@mui/styles";
import { theme } from "../theme";
import Container from "@mui/material/Container";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export default function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
    </Container>
  );
}
