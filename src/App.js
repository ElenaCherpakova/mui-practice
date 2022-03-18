import NavBar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({}));

function App() {
  // const classes = useStyles();
  return (
    <div>
      <NavBar />
    <Grid container>
    <Grid item sm={2}>
    <LeftBar/>
    </Grid>
    <Grid item sm={7}>
      <RightBar/>
    </Grid>
    <Grid item sm={3}>
    <Feed/>
    </Grid>
    </Grid>
    </div>
  );
}

export default App;
