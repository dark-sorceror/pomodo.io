import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { MdOutlineVideocam , MdCropFree } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowDown, FaRegQuestionCircle  } from "react-icons/fa";
import './TopBar.css'

const TopBar = () => {
  return (
    <div className="top-right-bar">
      <button className="icon-button">
        <RxAvatar className='icon-topbar'/>
      </button>
      <button className="icon-button">
        <MdOutlineVideocam className='icon-topbar' />
      </button>
      <button className="icon-button">
        <RiCalendarEventFill className='icon-topbar' />
      </button>
      <button className="icon-button">
        <FaPeopleGroup className='icon-topbar' />
      </button>
      <button className="icon-button">
        <FaArrowDown className='icon-topbar' />
      </button>
      <button className="icon-button">
        <FaRegQuestionCircle className='icon-topbar' />
      </button>
      <button className="icon-button">
        <MdCropFree className='icon-topbar' />
      </button>
    </div>
  )
}

export default TopBar
