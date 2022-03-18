import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { theme } from "../theme";

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "50%",
    },
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  cancel: {
    marginLeft: theme.spacing(2),
    // Styles will be applies to screen sizes from "sm" and up
    // [theme.breakpoints.up("sm")]: <-- { this doesn't work
    //   display: "none",
    // },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Elena Cherpakova
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          EChrpkva
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelIcon
            sx={{
              display: { sm: "none", md: "none", lg: "none" },
            }}
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <Search
            sx={{
              display: { sm: "none", md: "none", lg: "none" },
            }}
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <AvatarGroup max={4}>
            <Avatar
              alt="Donna"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </AvatarGroup>
        </div>
      </Toolbar>
    </AppBar>
  );
}
