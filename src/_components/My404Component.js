import React, { Component } from 'react';
import logo from './../_images/logo.svg';
import '../_styles/App.css';
import '../_styles/Home.css';
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

//############################################################################
// styles
//############################################################################
const styles = theme => ({
  numberSize: {
    fontSize: "20vmin"
  }
});
class My404Component extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Grid className="App">
        <header className="App-header">
        <Grid container className='flex'>
        <span className={classes.numberSize}> 4 </span>
        <img src={logo} className='app-logo' alt="logo" />
        <span className={classes.numberSize}> 4 </span> 
        <Grid container className={`flex + ${classes.numberSize}`}> Not Found ! </Grid> 
        </Grid>
        </header>
      </Grid>
    );
  }
}
const My404ComponentWithStyle = withStyles(styles)(My404Component);
export { My404ComponentWithStyle as My404Component };