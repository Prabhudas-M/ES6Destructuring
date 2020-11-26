import React from "react";
import ReactDom from "react-dom";
import animals from "./data";
import Cars from "./practice";

//console.log(animals)

// const[cat,dog] = animals;
// //console.log(cat,dog)
// const{name:Peyar, sound:Satham, feedingRequrements} = cat;
// //console.log("animal name  " + Peyar , "Athan Satham " + Satham);
// console.log(feedingRequrements.water)

// CHALLENGE: uncomment the code below and see the car stats rendered

ReactDOM.render(
  <h1 style={col}>welcome</h1>,
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      {/* <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td> */}
    </tr>
    <tr>
      {/* <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td> */}
    </tr>
  </table>,
  document.getElementById("root")
);
