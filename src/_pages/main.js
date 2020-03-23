import React from "react";
import { Grid } from "@material-ui/core";
import Draggable from "../_components/draggable";

function MainPage() {
  return (
    <Grid className="App">
      <Draggable position={{ x: 250, y: 250 }} radius={38}/>
    </Grid>
  );
}

export default MainPage;
