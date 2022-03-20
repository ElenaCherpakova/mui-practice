import { makeStyles } from "@mui/styles";

import { theme } from "../theme";

import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  media: {
    height: "450px",
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

export default function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image="https://images.unsplash.com/photo-1647627573078-d8f5b48ab85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          title="Alberta/Lake Moraine"
        />
        <CardContent>
          <Typography variant="h5">Alberta / Moraine Lake</Typography>
          <Typography variant="body">
            Moraine Lake is a glacially fed lake in Banff National Park, 14
            kilometres outside the village of Lake Louise, Alberta, Canada. It
            is situated in the Valley of the Ten Peaks, at an elevation of
            approximately 1,884 metres. The lake has a surface area of 50
            hectares.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
