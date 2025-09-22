// import React from 'react'
import './header.css';
import NetflixLogo from "../../assets/images/Netflix.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
	<div>
    <div className= 'header_container'>
      <div className = 'header_left'>
        <ul>
          <li><img src ={NetflixLogo} alt = "Netflix_Logo.png" width ="100"/></li>
          <li>Netflix</li>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className ="header_right">
        <ul>
          <li className="icon"><SearchIcon/></li>
          <li><NotificationsIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header