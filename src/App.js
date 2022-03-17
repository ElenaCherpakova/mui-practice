import NavBar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({}));

function App() {
  // const classes = useStyles();
  return (
    <div>
      <NavBar />
      <LeftBar/>
      <RightBar/>
      <Feed/>
    </div>
  );
}

export default App;
