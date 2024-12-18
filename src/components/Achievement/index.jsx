import React, { useState } from "react";
import badgeIcon from "../../assets/medal.png"
import "./styles.css";

const Achievement = () => {
  const [activeCategory, setActiveCategory] = useState("Dragons");

  const achievements = [
    { title: "24 HOURS", date: "17.01.2025", unlocked: true },
    { title: "72 HOURS", unlocked: false },
    { title: "144 HOURS", unlocked: false },
    { title: "288 HOURS", unlocked: false },
    { title: "3 DAYS IN ROW", unlocked: false },
    { title: "7 DAYS IN ROW", unlocked: false },
    { title: "30 DAYS IN ROW", unlocked: false },
  ];

  return (
    <div className="achievement">
      {/* Header */}
      <h1 className="header">Achievements</h1>

      <div className="achievements-container">
        {/* Earned Achievement Card */}
        <div className="earned-card">
          <div className="achievement-card unlocked">
            <img src={badgeIcon} alt="Badge" className="badge-icon" />
            <p className="reward-title">24 HOURS</p>
            <p className="reward-date">You earned this on: 17.01.2025</p>
          </div>
        </div>

        {/* Other Achievement Cards */}
        <div className="achievements-grid">
          {achievements.slice(1).map((item, index) => (
            <div key={index} className={`achievement-card ${item.unlocked ? "unlocked" : "locked"}`}>
              {!item.unlocked && (
                <>
                  <div className="locked-icon">🔒</div>
                  <p className="reward-title">{item.title}</p>
                </>
              )}
              {item.unlocked && (
                <>
                  <img src={require("../../assets/badge.png")} alt="Badge" className="badge-icon" />
                  <p className="reward-title">{item.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Category Buttons */}
      <div className="categories">
        {["Dragons", "Avatars", "Swords"].map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Achievement;