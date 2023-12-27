import React from 'react'
import './header.css'
import { IoSearch } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="header">
        <div className="header-logo">
            LOGO
        </div>
        <div className="header-searchbar">
            <div className="search-bar">
                <input type="text" placeholder='Search' className='search-input'/>
                <button className='search-button'><IoSearch className='search-icon'/></button>
            </div>
        </div>
        <div className="header-left">
            <div className="header-logout">
                <button className='logout-button'>Logout</button>
            </div>
            <div className="header-profile">
                <FaCircleUser className='profile-icon'/>
            </div>
        </div>
    </div>
  )
}
