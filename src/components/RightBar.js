import { makeStyles } from "@mui/styles";
import { theme } from "../theme";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
const useStyles = makeStyles(() => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  avatar: {
    marginRight: theme.spacing(35),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(28),
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
}));

export default function RightBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup
        className={classes.avatar}
        max={6}
        style={{ marginBottom: 20 }}
      >
        <Avatar
          alt="John Doe"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <Avatar
          alt="Layla Dean"
          src="https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        />
        <Avatar
          alt="Bob Kyle"
          src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <Avatar alt="Kate Seal" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80"
        />
        <Avatar
          alt="Kate Seal"
          src="https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80"
        />
        <Avatar
          alt="Kate Seal"
          src="https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80"
        />
      </AvatarGroup>

      <Typography
        className={classes.title}
        gutterBottom
        style={{ marginBottom: 20 }}
      >
        Gallery
      </Typography>

      <ImageList cols={2} rowHeight={150}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="cameraOne"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="breakfast"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            alt="burger"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            alt="camera"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt="coffee"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
            alt="honey"
          />
        </ImageListItem>
      </ImageList>
      <br />
      <Typography
        className={classes.title}
        gutterBottom
      
      >
        Categories
      </Typography>
      <br />
      <Link
        href="#"
        style={{
          marginRight: theme.spacing(8),
          color: "#555",
          fontSize: 16,
          textDecoration: "none",
        }}
        variant="body2"
      >
        Sport
      </Link>
      <Link
        href="#"
        style={{
          marginRight: theme.spacing(8),
          color: "#555",
          fontSize: 16,
          textDecoration: "none",
        }}
        variant="body2"
      >
        Food
      </Link>
      <Link
        href="#"
        style={{
          marginRight: theme.spacing(8),
          color: "#555",
          fontSize: 16,
          textDecoration: "none",
        }}
        variant="body2"
      >
        Music
      </Link>
      <Divider orientation="vertical" flexItem style={{marginBottom:2}}/>
      <Link
        href="#"
        style={{
          marginRight: theme.spacing(8),
          color: "#555",
          fontSize: 16,
          textDecoration: "none",
        }}
        variant="body2"
      >
        Movies
      </Link>
      <Link
        href="#"
        style={{
          marginRight: theme.spacing(8),
          color: "#555",
          fontSize: 16,
          textDecoration: "none",
        }}
        variant="body2"
      >
        Science
      </Link>
      <Link
        href="#"
        style={{
          marginRight: theme.spacing(8),
          color: "#555",
          fontSize: 16,
          textDecoration: "none",
        }}
        variant="body2"
      >
        Technology
      </Link>
    </Container>
  );
}
