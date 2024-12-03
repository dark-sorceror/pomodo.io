import React from "react";
import "./PopUp.css";

const Study = () => {
  return (
    <div className="popup">
      <h2>What would you like to study today?</h2>
      <div className="study-options">
        <button>Biology</button>
        <button>Maths</button>
        <button>History</button>
        <button>Economics</button>
        <button>Psychology</button>
        <button>Add New...</button>
      </div>
    </div>
  );
};

export default Study;