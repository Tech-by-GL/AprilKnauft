// import logo from "./logo.svg";
import "../App.css";
// import React, { useState } from "react";
import Image from "../image";
import { Routes, Route, Link } from "react-router-dom";
import Icon, { FacebookOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Start() {
  return (
    <div className="App">
      <div className="first">
        <Image />
        <Link to="/login">
          <div className="continue">
            <FacebookOutlined />
            <p className="continue-title">Continue with Facebook</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Start;
