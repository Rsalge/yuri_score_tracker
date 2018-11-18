import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.getPing();
  }
  getPing() {
    axios.get("/ping").then(response => {
      console.log(response.data);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">Testing</div>
        <div className="footer">Testing</div>
        <div className="content">
          <h1> Hi Ben! </h1>
          Testing
        </div>
        <div className="sidebar-left">Testing</div>
        <div className="sidebar-right">Testing</div>
      </div>
    );
  }
}

export default App;
