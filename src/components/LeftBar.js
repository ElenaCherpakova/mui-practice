import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "Pointer",
    },
  },
  text: {
    // Styles will be applies to screen sizes from large down to small
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    alignItems: "center",
  },
}));

export default function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
    </Container>
  );
}
