import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import Image from "../image";

function Login() {
  return (
    <div className="login">
      <div>
        <Image />
      </div>
      <div className="title-input">
        <p>Ten tai khoan</p>
        <input placeholder="John Dae" className="input" type="text" />
      </div>
      <div className="title-input">
        <p>So dien thoai</p>
        <input
          placeholder="XXXX XXXX XXXX XXXX"
          className="input"
          type="text"
        />
      </div>
      <div className="title-input">
        <p>Dia chi</p>
        <select
          id="province"
          name="province"
          className="form-control"
        >
          <option value="">-- chọn tỉnh tp</option>
          <option value="hni">Hà Nội</option>
          <option value="hpg">Hải Phòng</option>
        </select>
      </div>
      <div className="title-input">
        <p>Ngay thang nam sinh</p>
        <input type="date" placeholder="MM/YY" className="input" />
      </div>
      <Link to="/account">
      <div className="accept">
        <p>Dong y vao tai khoan</p>
      </div>
      </Link>
    </div>
  );
}

export default Login;
