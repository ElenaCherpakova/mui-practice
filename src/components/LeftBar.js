import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({}));

export default function LeftBar() {
  const classes = useStyles();
  return (
    <Container>
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
