import { makeStyles } from "@mui/styles";

import { theme } from "../theme";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export default function Post() {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia />
      <CardContent>
        <Typography></Typography>
      </CardContent>
      <CardActions>
        <Button></Button>
      </CardActions>
    </Card>
  );
}
