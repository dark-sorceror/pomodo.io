import React, { useState } from "react";

import friend1 from "../../assets/dragon_4.jpg";
import friend2 from "../../assets/dragon_9.jpg";
import friend3 from "../../assets/dragon_10.jpg";

import "./styles.css";

export const Profile = () => {
    const [ isCollapsed, setIsCollapsed ] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const friends = [
        { img: friend1 }, 
        { img: friend2 }, 
        { img: friend3 }
    ];

    return (
        <div
            className={ `user-profile-container ${
                isCollapsed ? "collapsed" : ""
            }` }
        >
            <button
                className={ `collapse-button ${
                    isCollapsed ? "collapsed-button" : ""
                }` }
                onClick={toggleCollapse}
                title={
                    isCollapsed ? "Expand Profile Tab" : "Collapse Profile Tab"
                }
            >
                { isCollapsed ? "➡️" : "⬅️" }
            </button>
            {!isCollapsed && (
                <div className="user-profile">
                    {/* Profile Header */}
                    <div className="profile-header">
                        <img
                            src="src/assets/dragon_7.jpg"
                            alt="Profile Avatar"
                            className="profile-avatar"
                        />
                        <div className="profile-details">
                            <div className="profile-username">@LISA0494</div>
                            <div className="profile-stats">
                                <span>200 XP</span>
                                <span>Level I</span>
                                <span className="coins">58</span>
                            </div>
                            <div className="profile-status">🟢 Online</div>
                        </div>
                    </div>

                    {/* Level Progress */}
                    <div className="level-progress">
                        <div className="level-label">Lvl. 1</div>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: "80%" }}
                            ></div>
                        </div>
                        <div className="level-label">Lvl. 2</div>
                    </div>

                    {/* Friends Section */}
                    <div className="friends-section">
                        <div className="section-title">FRIENDS</div>
                        <div className="friends-list">
                            {
                                friends.map((friend, index) => (
                                    <img
                                        key={index}
                                        src={friend.img}
                                        alt={`Friend ${index}`}
                                        className="friend-avatar"
                                    />
                                ))
                            }
                            <button className="more-friends">...</button>
                        </div>
                    </div>

                    {/* Recent Study Session */}
                    <div className="study-session">
                        <div className="section-title">
                            RECENT STUDY SESSION
                        </div>
                        <div className="level-progress">
                            <div className="level-label">Biology</div>
                            <div className="progress-bar">
                                <div
                                    className="recentStudyProgress"
                                    style={{ width: "80%" }}
                                ></div>
                            </div>
                            <img
                                src="src/assets/hourglass.png"
                                className="icon"
                                alt=""
                            />
                        </div>
                        <button className="challenge-button">
                            Send Challenge Request...
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};