import React, { useState } from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaRegClipboard } from "react-icons/fa";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { PiMedalDuotone } from "react-icons/pi";
import { CiGift, CiBoxList } from "react-icons/ci";
import { TbBoxModel } from "react-icons/tb";

import ToDoList from '../PopUps/ToDoList';
import DailyQuote from '../PopUps/DailyQuote';
import GoogleCalendar from '../PopUps/GoogleCalendar';
import StickyNotes from '../PopUps/StickyNotes';
import Study from '../PopUps/Study';
import SeasonPass from '../SeasonPass/SeasonPass'

import "./MenuBar.css";

const MenuBar = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [minimizedPopups, setMinimizedPopups] = useState({});

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
        <button className="icon-button" onClick={() => togglePopup("home")}>
          <IoHomeOutline className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("timer")}>
          <FiClock className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("StickyNotes")}>
          <CiBoxList className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("ToDoList")}>
          <FaRegClipboard className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("GoogleCalendar")}>
          <RiCalendarEventFill className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("medal")}>
          <PiMedalDuotone className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("DailyQuote")}>
          <TbBoxModel className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("gift")}>
          <CiGift className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("SeasonPass")}>
          <IoCartOutline className="icon-topbar" />
        </button>
        <button className="icon-button" onClick={() => togglePopup("plus")}>
          <FaPlus className="icon-topbar" />
        </button>
      </div>

      {/* Popups */}
      {activePopup === "StickyNotes" && !minimizedPopups["StickyNotes"] && (
        <StickyNotes onClose={closePopup} />
      )}
      {activePopup === "ToDoList" && !minimizedPopups["ToDoList"] && (
        <ToDoList onClose={closePopup} />
      )}
      {activePopup === "GoogleCalendar" && !minimizedPopups["GoogleCalendar"] && (
        <GoogleCalendar onClose={closePopup} />
      )}
      {activePopup === "DailyQuote" && !minimizedPopups["DailyQuote"] && (
        <DailyQuote onClose={closePopup} />
      )}
      {activePopup === "SeasonPass" && !minimizedPopups["SeasonPass"] && (
        <SeasonPass onClose={closePopup} />
      )}
    </>
  );
};

export default MenuBar;
