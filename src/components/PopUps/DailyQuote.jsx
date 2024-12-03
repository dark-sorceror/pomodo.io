import React from "react";
import { getTodaysDate } from '../../services/getDate';
import "../../styles/PopUps/Quote.css";

const DailyQuote = () => {
  return (
    <div className="quote-popup">
      <h4>Daily Motivation | { getTodaysDate() }</h4>
      <blockquote>
        "Never say never, because limits like fears are often just an illusion."
      </blockquote>
    </div>
  );
};

export default DailyQuote;