import React, { useState } from "react";
import "./styles.css";
import icon1 from '../../assets/dollar.png'
import icon2 from '../../assets/coin.png'
import icon3 from '../../assets/coins.png'
import icon4 from '../../assets/money.png'
import icon5 from '../../assets/money1.png'
import icon6 from '../../assets/money2.png'
import icon7 from '../../assets/treasure-chest.png'



const DailyGift = () => {
  const [claimedDays, setClaimedDays] = useState([true, true, true, false, false, false, false]);

  const handleClaim = () => {
    setClaimedDays((prev) => {
      const nextClaimedDays = [...prev];
      const currentDay = nextClaimedDays.findIndex((day) => !day);
      if (currentDay !== -1) nextClaimedDays[currentDay] = true;
      return nextClaimedDays;
    });
  };

  const rewards = [
    { day: 1, icon: icon1, reward: "1000 Coins" },
    { day: 2, icon: icon2, reward: "1000 Coins" },
    { day: 3, icon: icon3, reward: "1000 Coins" },
    { day: 4, icon: icon4, reward: "1000 Coins", highlighted: true },
    { day: 5, icon: icon5, reward: "2500 Coins" },
    { day: 6, icon: icon6, reward: "5000 Coins" },
    { day: 7, icon: icon7, reward: "10000 Coins" },
  ];

  return (
    <div className="daily-gift">
      <h1 className="header">Daily Gift</h1>
      <div className="gift-cards">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className={`card ${claimedDays[index] ? "claimed" : ""} ${reward.highlighted ? "highlighted" : ""}`}
          >
            <p className="day">Day {reward.day}</p>
            <img src={reward.icon} alt="Reward Icon" className="reward-icon" />
            <p className="reward">{reward.reward}</p>
          </div>
        ))}
      </div>
      <button className="claim-btn" onClick={handleClaim}>
        CLAIM
      </button>
    </div>
  );
};

export default DailyGift;