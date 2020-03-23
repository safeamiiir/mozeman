import React from "react";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Draggable from "./draggable";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #6bfeba 30%, #FFC107 90%)",
    height: "100vh",
    overflow: "hidden"
  }
});

function MainPageComponent() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Draggable position={{ x: 250, y: 250 }} radius={38} />
    </Grid>
  );
}

export default MainPageComponent;
