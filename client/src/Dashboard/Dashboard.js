import React, { useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "./Dashboard.css";
import "react-calendar/dist/Calendar.css";
export default function Dashboard() {
  const { auth } = useSelector((state) => ({ ...state }));
  const [value, onChange] = useState(new Date());
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  const tom = new Date(tomorrow);
  console.log(value.getDate(), value.getMonth() + 1, value.getFullYear());
  return (
    <>
      <div>
        <h1 style={{ margin: "auto", textAlign: "center" }}>
          PLEASE MARK ATTENDENCE FOR TODAY
        </h1>
      </div>
      <div>
        <Calendar
          minDate={new Date()}
          value={value}
          onChange={onChange}
          maxDate={new Date()}
          className="cal"
        />
        <h6></h6>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          Number of hours
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
