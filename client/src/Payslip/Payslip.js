import React from "react";
import './Payslip.css'
export default function Payslip(props) {
  return (
    <div className="pdf">
      <div className="heading">
        <div className="left">
          <h4>Payslip</h4>
          <h4 style={{"display":"inline-block"}}>{props.month}</h4>
          <p style={{"display":"inline-block","paddingLeft":"5px","marginBottom":"0px"}}>{props.year}</p>
        </div>
        <div className="right">
                <img src="https://images.freecreatives.com/wp-content/uploads/2015/04/logo033.png" width="165px" height="70px"></img>
        </div>
      </div>
    </div>
  );
}
