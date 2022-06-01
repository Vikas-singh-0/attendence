import axios from "axios";
import React, { useState,useEffect } from "react";
import {useDispatch} from 'react-redux'
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function TLogin() {

  const history = useNavigate()
  useEffect(() => {
    if(window.localStorage.getItem('auth')){
      console.log("true");
      history('/dashboard')
    }
  }, [])
  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const dispatch = useDispatch()
  const formData = {
    email,
    password,
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "POST",
      url: "http://localhost:8000/api/employee/login",
      data: formData,
    });
    if (res.data.token) {

      // TODO :- add localstorage token
      window.localStorage.setItem('auth',res.data.token)
      dispatch({type:"LOG_IN_USER",payload:res.data.token})

      history("/dashboard");
    }
    console.log("response", res);
  };
  const emailCHange = (e) => {
    setemail(e.target.value);
  };

  const passwordChange = (e) => {
    setpassword(e.target.value);
  };
  return (
    <div className="black">
      <h1>
        HI WELCOME TO TEMPERARY LOGIN PAGE, PLEASE LOGIN TO ACCESS THE DASHBOARD
      </h1>
      <pre>{JSON.stringify(formData, null, 4)}</pre>
      <div className="form-box">
        <form className="login-form">
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
            <div id="emailHelp" className="form-text">
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

          <div className="buttons-box">
            <button
              type="submit"
              onClick={loginHandler}
              className="btn btn-primary"
            >
              LOGIN
            </button>
            <Link to="/register">
              <button className="btn btn-primary">REGISTER</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
