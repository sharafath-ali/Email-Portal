import { IconButton } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import Listing from './Listing';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Emailrow from './Emailrow';
import './Email.css'
function Emaillist() {
  return (
    <div className='Emaillist'>
     <div className='Email_settings'>
      <div className='Email_settings_left'>
        <Checkbox style={{color:'black'}}/>
        <IconButton>
           <ArrowDropDownIcon/>
        </IconButton>
        <IconButton>
           <RedoIcon/>
        </IconButton>
        <IconButton>
           <MoreVertIcon/>
        </IconButton>
      </div>
      <div className='Email_settings_right'>
        <IconButton>
           <ChevronRightIcon/>
        </IconButton>
        <IconButton>
           <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
          <KeyboardHideIcon/>
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
     </div>
     <div className='email_Listing_Nav'>
       <Listing icon={<InboxIcon/>} title='Primary' color='red' select={true}/>
       <Listing icon={<PeopleIcon/>} title='Social' color='#1A73E8' select/>
       <Listing icon={<LocalOfferIcon/>} title='Promotions' color='green' select/>
     </div>
     <div className='email_Listing_section'>
       <Emailrow title='this is mail' subject='job interview' description={'jobshtvtxyuisxvubsijxhgs7tyuxisbvcacyxgjkdstazygxj kndsycxshjnkdmugvhbjnkkdc9ubxcudiny7stcvxjckndyfsgxnm dugs gubkmcdgvdhcndgyfy gj'}  time={'10/3/2023'}/>
       <Emailrow title='this is mail' subject='job interview' description={'job'}  time={'10/3/2023'}/>
     </div>
    </div>
  )
}

export default Emaillist