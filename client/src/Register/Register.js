import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [CTC, setCTC] = useState("");
  const [password, setpassword] = useState("");
  const formData = {
    email,
    name,
    age,
    CTC,
    password,
  };

  const history = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    registerHandlerCallback();
  };

  const emailCHange = (e) => {
    setemail(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const ageChange = (e) => {
    setage(e.target.value);
  };
  const ctcChange = (e) => {
    setCTC(e.target.value);
  };
  const passwordChange = (e) => {
    setpassword(e.target.value);
  };
  const registerHandlerCallback = async () => {
    const { data } = await axios({
      url: "http://localhost:8000/api/employee/register",
      method: "POST",
      data: formData,
    });
    if (data.message == "created new employee") {
      history("/");
    }
    console.log("res for register");
  };
  return (
    <div className="black">
      <h1>Please register to access login and dashboard</h1>
      <div className="form-box">
        <form className="login-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              onChange={nameChange}
              name="name"
              value={name}
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={emailCHange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={passwordChange}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              value={age}
              min="18"
              max="65"
              onChange={ageChange}
              name="age"
              className="form-control"
              id="age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ctc" className="form-label">
              Please enter your CTC
            </label>
            <input
              type="number"
              onChange={ctcChange}
              value={CTC}
              name="CTC"
              className="form-control"
              id="ctc"
            />
          </div>

          <button
            type="submit"
            onClick={registerHandler}
            className="btn btn-primary"
          >
            REGISTER
          </button>
        </form>
      </div>
     
    </div>
  );
}
