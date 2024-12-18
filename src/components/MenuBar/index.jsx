import React, { useState } from "react";

import SeasonPass from "../SeasonPass/SeasonPass";

import { TodoList } from "../PopUps/To-do List";
import { DailyQuote } from "../PopUps/Daily Quote";
import GoogleCalendar from "../PopUps/GoogleCalendar";
import { StickyNotes } from "../PopUps/Sticky Notes";
import Study from "../PopUps/Study";

import "./styles.css";
import DailyGift from "../DailyGift";
import Achievement from "../Achievement";

export const MenuBar = () => {
    const [ activePopup, setActivePopup ] = useState(null);
    const [ minimizedPopups, setMinimizedPopups ] = useState({});

    const togglePopup = (popupName) => {
        if (activePopup === popupName) {
            setMinimizedPopups((prev) => ({
                ...prev,
                [popupName]: !prev[popupName],
            }));
        } else {
            setActivePopup(popupName);
            setMinimizedPopups({ [popupName]: false });
        }
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    return (
        <>
            <div className="menu-bar">
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("home") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("timer") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("To-do List") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m3 17 2 2 4-4" />
                        <path d="m3 7 2 2 4-4" />
                        <path d="M13 6h8" />
                        <path d="M13 12h8" />
                        <path d="M13 18h8" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("Sticky Notes") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                        <path d="M15 3v4a2 2 0 0 0 2 2h4" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("GoogleCalendar") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M11 14h1v4" />
                        <path d="M16 2v4" />
                        <path d="M3 10h18" />
                        <path d="M8 2v4" />
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("achievements") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("DailyQuote") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <path d="M8 12a2 2 0 0 0 2-2V8H8" />
                        <path d="M14 12a2 2 0 0 0 2-2V8h-2" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("DailyGift") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="8" width="18" height="4" rx="1" />
                        <path d="M12 8v13" />
                        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("SeasonPass") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                </button>
                <button
                    className="icon-button"
                    onClick={ () => togglePopup("plus") }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </button>
            </div>

            {/* Popups */}
            {
                activePopup === "Sticky Notes" && !minimizedPopups["Sticky Notes"] && (
                    <StickyNotes onClose={closePopup} />
                )
            }
            {
                activePopup === "To-do List" && !minimizedPopups["To-do List"] && (
                    <TodoList onClose={closePopup} />
                )
            }
            {
                activePopup === "GoogleCalendar" && !minimizedPopups["GoogleCalendar"] && (
                    <GoogleCalendar onClose={closePopup} />
                )
            }
            {
                activePopup === "DailyQuote" && !minimizedPopups["DailyQuote"] && (
                    <DailyQuote onClose={closePopup} />
                )
            }
            {
                activePopup === "SeasonPass" && !minimizedPopups["SeasonPass"] && (
                    <SeasonPass onClose={closePopup} />
                )
            }
            {
                activePopup === "DailyGift" && !minimizedPopups["DailyGift"] && (
                    <DailyGift onClose={closePopup} />
                )
            }
            {
                activePopup === "achievements" && !minimizedPopups["achievements"] && (
                    <Achievement onClose={closePopup} />
                )
            }
        </>
    );
};