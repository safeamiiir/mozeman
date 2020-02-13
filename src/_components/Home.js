import React, { Component } from "react";
import logo from "./../_images/logo.svg";
import "./../_styles/App.css";
import "../_styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>
            پروژه <yellow style={{ color: "yellow" }}>موزمان</yellow> به‌زودی
            شروع میشه
          </p>
          <p>!منتظر ما باشین</p>
        </header>
      </div>
    );
  }
}
export { Home };
