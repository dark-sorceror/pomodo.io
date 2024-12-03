import React, { useState } from "react";
import "./SeasonPass.css";
import dragonImage from '../../assets/dragon_4.jpg';


const SeasonPass = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const rewards = [
    { id: 1, xp: 100, level: 1, isUnlocked: true, name: "Grandpa's Farm", type: "Background",image: dragonImage, },
    { id: 2, xp: 250, level: 2, isUnlocked: false, image: dragonImage, },
    { id: 3, xp: 500, level: 3, isUnlocked: false, image: dragonImage, },
    { id: 4, xp: 1000, level: 4, isUnlocked: false, image: dragonImage, },
    { id: 5, xp: 2500, level: 5, isUnlocked: false, image: dragonImage, },
    { id: 6, xp: 5000, level: 6, isUnlocked: false, image: dragonImage, },
  ];

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < 17 ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="season-pass">
      {/* Header */}
      <h1 className="header">Season Pass</h1>

      {/* Featured Reward */}
      <div className="featured-reward">
        <div className="img">
          <img
            src={dragonImage}
            alt="Grandpa's Farm"
            className="reward-img"
          />
        </div>
        <div className="context">
          <h2 className="reward-title">Legendary - Background</h2>
          <h3 className="reward-name">Grandpa's Farm</h3>
          <p className="reward-desc">Grandpa always used to say "The Farm ain't a place, it's a lifestyle</p>
          <div className="reward-buttons">
            <button className="button view-reward">View Reward</button>
            <button className="button redeem">Redeem</button>
          </div>
        </div>
      </div>

      {/* Rewards Grid */}
      <div className="rewards-grid">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`reward-card ${reward.isUnlocked ? "unlocked" : "locked"}`}
          >
            <div className="reward-image-container">
              <img src={reward.image} alt={`Reward ${reward.level}`} className="reward-image" />
              {!reward.isUnlocked && (
                <div className="reward-overlay">
                  <i className="fa fa-lock lock-icon"></i>
                </div>
              )}
            </div>
            <div className="reward-info">
              <p className="reward-level-xp">
                <span className="reward-level">Lv. {reward.level}</span>
                <span className="reward-xp">{reward.xp} XP</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="pagination-icon" onClick={handlePrevPage}>
          &#8249;
        </span>
        Page {currentPage}/17
        <span className="pagination-icon" onClick={handleNextPage}>
          &#8250;
        </span>
      </div>

      {/* Category Buttons */}
      <div className="categories">
        <button className="category-button">Dragons</button>
        <button className="category-button">Avatars</button>
        <button className="category-button">Swords</button>
      </div>
    </div>
  );
};

export default SeasonPass;