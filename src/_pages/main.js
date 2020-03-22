import React from "react";
import { Grid } from "@material-ui/core";
import logo from "./../_images/logo.svg";

function MainPage() {
  return (
    <Grid className="App">
      <header className="App-header">
        <Grid container className="flex">
          <Grid container>
            <img src={logo} className="app-logo-move" alt="logo" />
          </Grid>
        </Grid>
      </header>
    </Grid>
  );
}

export default MainPage;
