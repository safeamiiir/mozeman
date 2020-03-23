import React from "react";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainPageComponent from "../_components/MainPageComponent";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #6bfeba 30%, #FFC107 90%)",
    height: "100vh",
    overflow: "hidden"
  }
});

function MainPage() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <MainPageComponent />
    </Grid>
  );
}

export default MainPage;
