// import logo from "./logo.svg";
import "./App.css";
// import React, { useState } from "react";
import Image from "./image";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Icon, { FacebookOutlined } from "@ant-design/icons";
import Start from "./Router/Start";
import Account from "./Router/account";
import Login from "./Router/Login";
import QR1 from "./Router/qr-1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/qr-1" element={<QR1 />}></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
