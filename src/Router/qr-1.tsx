import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import BackgroundBlack from "../bgrBlack.svg";
import Allow from "../allow.svg";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

function QR1() {

  const $ = document.querySelector.bind(document);
  const qr1Container = $('.qr1-container');
  function showQr1() {
    qr1Container?.classList.add('show');
  }
  function hideQr1() {
    qr1Container?.classList.remove('show');
  }
  


  return (
    <div className="qr-1-container">
      <div className="backgroundQr1Black" >
        <img  src={BackgroundBlack}></img>
      </div>
      <div className="backgroundSupQr1Black">
        <div className="background-title">
            <p>"boralpromo.com" Would Like to Access the Camera</p>
        </div>
        <div className="background-choose">
            <a> Cancel</a>
            <a> Allow</a>
        </div>
        <div className="qr-1-spin">
          <Space>
          <SyncOutlined spin />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default QR1;
