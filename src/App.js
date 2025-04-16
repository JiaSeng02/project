import React, { Component } from "react";
import "./App.less";

export default class App extends Component {
  render() {
    return (
      <div className="box">
        Hello
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <i className="iconfont icon-index"></i>
        <div className="con"></div>
      </div>
    );
  }
}
