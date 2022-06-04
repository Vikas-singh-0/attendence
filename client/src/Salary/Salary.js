import React, { useState } from "react";
import "./Salary.css";
import Payslip from "../Payslip/Payslip";
export default function Salary() {
  const [year, setYear] = useState(1998);
  const [month,setMonth] = useState('Janauary')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log({month,year});

  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Salary Page</h1>
      <form className="form">

      <select name="year" value={year} onChange={(e)=>{setYear(e.target.value)}} id="year">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
        <select name="month" value={month} onChange={(e)=>{
          setMonth(e.target.value);
        }} id="month">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <button className="btn btn-primary" onClick={submitHandler}>Submit</button>

      </form>

      <Payslip year = {year} month={month}/>
    </>
  );
}
