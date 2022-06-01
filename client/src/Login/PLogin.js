import React,{useEffect} from "react";
import {Link,useNavigate} from 'react-router-dom'
import "./PLogin.css";

export default function PLogin() {
  const history = useNavigate()
  useEffect(() => {
    if(window.localStorage.getItem('auth')){
      console.log("true");
      history('/dashboard')
    }
  }, [])
  
 
  return (
    <div className="black">
      <h1>
        HI WELCOME TO PERMANEN LOGIN PAGE , PLEASE LOGIN TO ACCESS THE DASHBOARD
      </h1>
      <div className="form-box">
        <form className="login-form">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
         
         <div className="buttons-box">
         <button type="submit" className="btn btn-primary">
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
