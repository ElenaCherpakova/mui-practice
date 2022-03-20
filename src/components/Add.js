import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import { useState } from "react";
import { theme } from "../theme";

const useStyles = makeStyles(() => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
}));

export default function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab className={classes.fab} color="secondary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>More Details</Container>
      </Modal>
    </>
  );
}
