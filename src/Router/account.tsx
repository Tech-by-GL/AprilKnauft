import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import Image from "../image";
import Image2 from "../imageAccount.svg";
import Phone from "../phone.svg";
import Gift from "../gift.svg";
import History from "../history.svg";
import AccountImage from "../account.svg";
import Exit from "../exit.svg";
import Advertisement from "../advertisement.svg";
// import QR1 from "./qr-1";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Modal, Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import BackgroundBlack from "../bgrBlack.svg";
import { on } from "events";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { isConstructorDeclaration } from "typescript";
import { log } from "console";
import Webcam from "react-webcam";
import Camera from "./Camera";
import ReactDOM from "react-dom";
function Account() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log("clicked ok");
    setVisible(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log("clicked cancel");
    setVisible(false);
  };

  const [visible1, setVisible1] = useState(false);

  const showModal1 = () => {
    setVisible(false);
    setVisible1(true);
  };

  const hideModal1 = () => {
    setVisible1(false);
  };

  const [visible2, setVisible2] = useState(false);

  const showModal2 = () => {
    setVisible2(true);
  };

  const hideModal2 = () => {
    setVisible2(false);
  };

  const handleCancel2 = (e: React.MouseEvent<HTMLElement>) => {
    console.log("clicked cancel");
    setVisible2(false);
  };

  const handleCancel1 = (e: React.MouseEvent<HTMLElement>) => {
    console.log("clicked cancel");
    setVisible1(false);
  };

  const webRef = useRef(null);

  return (
    <div className="account-container">
      <div>
        <Image className="account-image" />
      </div>
      <div className="account-image-2">
        <img src={Image2} />
      </div>
      <div className="body">
        <div className="item">
          <button onClick={showModal} className="item-list item-js ">
            <img src={Phone} alt="" />
            <p>QR - Quest</p>
          </button>
          <button onClick={showModal2} className="item-list">
            <img src={Gift} alt="" />
            <p>Doi qua</p>
          </button>
          <button onClick={showModal1} className="item-list">
            <img src={History} alt="" />
            <p>Lich su diem</p>
          </button>
        </div>
        <div onClick={showModal1} className="item">
          <button className="item-list">
            <img src={History} alt="" />
            <p>Lich su qua</p>
          </button>
          <button onClick={showModal1} className="item-list">
            <img src={AccountImage} alt="" />
            <p>Tai khoan</p>
          </button>
          <Link to="/login">
            <button onClick={showModal1} className="item-list">
              <img src={Exit} alt="" />
              <p>Thoát</p>
            </button>
          </Link>
        </div>
        <div className="footer-account">
          <p>Chuong trinh khuyen mai</p>
          <img className="footer-account-image" src={Advertisement} alt="" />
        </div>
      </div>
      <Modal
        className="Modal-qr1"
        visible={visible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ width: "10px" }}
        // cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div className="modal">
          <div>
            {/* <CameraFeed sendFile={uploadImage} /> */}
            <Camera />
          </div>
          <p className="modal-title">
            “boralpromo.com” Would Like to Access the Camera
          </p>
          <div className="modal-background">
            <button className="button-modal" onClick={hideModal}>
              Cancel
            </button>
            <button className="button-modal" onClick={showModal1}>
              Allow
            </button>
          </div>
          <div className="loading">
            <LoadingOutlined />
          </div>
        </div>
      </Modal>
      {/* visible1 */}
      <Modal visible={visible1} onCancel={handleCancel1} footer={null}>
        <h1>Hi</h1>
      </Modal>
      {/* visible2 */}
      <Modal visible={visible2} onCancel={handleCancel2} footer={null} >
        <div className="modal-gift">
        <img className="modal-gift-image" src={Gift} alt="" />
        <input className="modal-gift-input" type="text" />
        <button className="modal-gift-button">Doi qua</button>
        </div>
      </Modal>
    </div>
  );
}

export default Account;
