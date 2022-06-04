import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "./Dashboard.css";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate } from "react-router-dom";
export default function Dashboard() {
  const history = useNavigate();
  const { auth } = useSelector((state) => ({ ...state }));
  const [value, onChange] = useState(new Date());
  // const today = new Date();
  // const tomorrow = today.setDate(today.getDate() + 1);
  // const tom = new Date(tomorrow);
  const [hours, setHours] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const formData = {
    NumberOfHours: hours,
    Datee: value.getDate(),
    Year: value.getFullYear(),
    Month: value.getMonth() + 1,
  };

  const checkAtt = async () => {
    const res = await axios({
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
      },
      url: `http://localhost:8000/api/attendence/CheckAttendence/${value.getFullYear()}/${
        value.getMonth() + 1
      }/${value.getDate()}`,
    });
    setTimeout(() => {
      if (res.data.att) {
        setDisabled(true);
      }
    }, 100);
  };
  useEffect(() => {
    checkAtt();
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "POST",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
      },
      url: "http://localhost:8000/api/attendence/markAttendence",
      data: formData,
    });
    if (res.data.success) {
      history("/dashboard");
    }
    setDisabled(true)
  };

  return (
    <>
      <div>
        <h1 style={{ margin: "auto", textAlign: "center" }}>
          PLEASE MARK ATTENDENCE FOR TODAY
        </h1>
      </div>
      <div className={disabled ? "disabled" : ""}>
        <Calendar
          minDate={new Date()}
          value={value}
          onChange={onChange}
          maxDate={new Date()}
          className="cal"
        />

        <div className="hours">
          <h2>Number of hours</h2>
          <input
            type="number"
            onChange={(e) => {
              setHours(e.target.value);
            }}
            min="1"
            max="9"
            value={hours}
          />
          <button onClick={submitHandler}>submit</button>
        </div>
      </div>
      {disabled && (
        <div className="marked">
          <div>
            <h1>You have already marked today's attendence</h1>
          </div>
          <div>
            <Link to="salary">
              <button type="button" class="btn btn-primary">
                Go to the Salary page
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
