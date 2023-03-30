import { Button} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOp from './SidebarOp';
import './Sidebar.css';
function Sidebar() {
  return (
    <>
    <div className='sidebar'>
        <Button style={{margin:'30px',borderRadius: '10px',backgroundColor:'rgba(128, 10, 239, 0.333)',padding: '12px',alignItems: 'center',boxShadow:'1px 3px 5px -2px rgba(0,0,0,.7)'}} startIcon={<CreateIcon/>} >Compose</Button>
        <SidebarOp Icon={<InboxIcon/>} title='Inbox' number={56}/>
        <SidebarOp Icon={<StarIcon/>} title='Starred' number={560}/>
        <SidebarOp Icon={<AccessTimeIcon/>} title='Snoozed' number={560}/>
        <SidebarOp Icon={<LabelImportantIcon/>} title='Important' number={560}/>
        <SidebarOp Icon={<SendIcon/>} title='Sent' number={560}/>
        <SidebarOp Icon={<DraftsIcon/>} title='Drafts' number={560}/>
        <SidebarOp Icon={<ExpandMoreIcon/>} title='More' number={560}/>
    </div>
    

    </>
  )
}

export default Sidebar