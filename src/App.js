// import "./App.css";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    background: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="large"
      className={classes.button}
      startIcon={<PersonIcon />}
    >
      Hello World
    </Button>
  );
}

export default App;
