import React from "react";
import { Grid, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Draggable from "./draggable";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #6bfeba 30%, #FFC107 90%)",
    height: "100vh",
    overflow: "hidden"
  },
  nameFloat: {
    width: "100%",
    position: "absolute",
    top: 8,
    textAlign: "center"
  }
});

function MainPageComponent() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.nameFloat}>
        <Typography>
          <strong>Just Move It!</strong>
        </Typography>
      </Grid>
      <Draggable position={{ x: 150, y: 150 }} radius={38} />
    </Grid>
  );
}

export default MainPageComponent;
