import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import Cars from "./practice";

console.log(Cars);
//console.log(animals)

// const[cat,dog] = animals;
// //console.log(cat,dog)
// const{name:Peyar, sound:Satham, feedingRequrements} = cat;
// //console.log("animal name  " + Peyar , "Athan Satham " + Satham);
// console.log(feedingRequrements.water)

// CHALLENGE: uncomment the code below and see the car stats rendered

ReactDOM.render(
  <div>
    <h1>welcome</h1>,
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      {/* <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr> */}
    </table>{" "}
  </div>,
  document.getElementById("root")
);
