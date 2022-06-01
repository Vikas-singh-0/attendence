import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [employeeType, setEmployeeType] = useState("______");
  return (
    <div className="home">
      <div className="container">
        <h1 className="heading-top">PLEASE SELECT EMPLOYEE TYPE TO PROCEED</h1>
        <div className="redirect-links">
          <Link to="/login-for-temperary">
    
            <button className="btns">Temperary</button>
          </Link>
          <Link to="/login-for-permanent">
    
            <button className="btns">Permanent</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
