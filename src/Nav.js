import React from 'react'
import './Nav.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import  {Avatar, IconButton} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Nav() {
  return (
    <div className='header'>
      <div className='header_left'>
         <IconButton><MenuRoundedIcon/></IconButton>
         <h4  style={{margin:'10px 0px 0px 10px',color:'white' }}><i>A-MAIL</i></h4>
         <MailOutlineIcon className='header_left_mail'/>

      </div>
      <div className='header_middle'>
          <IconButton><SearchIcon/></IconButton>
          <input placeholder='Search mail' type='text' className='input-search' />
          <ArrowDropDownIcon className='search-dropdown'/>
      </div>
      <div className='header_right'>
       <IconButton className='APPicon'><AppsIcon/></IconButton>
       <IconButton><NotificationsIcon/></IconButton>
       <Avatar style={{margin:'10px'}}/>
      </div>
    </div>
  )
}

export default Nav