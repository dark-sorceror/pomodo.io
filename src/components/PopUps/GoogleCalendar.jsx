import React from "react";
import "./PopUp.css";

const GoogleCalendar = () => {
  return (
    <div className="popup">
      <h2>Google Calendar</h2>
      <p>Sync your events and view schedules here!</p>
      <iframe
        src="https://calendar.google.com/calendar/embed"
        style={{ width: "100%", height: "300px", border: "none" }}
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;