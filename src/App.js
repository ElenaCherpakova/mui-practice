import NavBar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { theme } from "./theme";

const useStyles = makeStyles(() => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <RightBar />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Feed />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
