
import React from 'react'
import './SidebarOp.css'
function SidebarOp({Icon,title,number}) {
  return (
    <div className='SidebarOp'>
      {Icon}
     <h5 className='Sideh'>{title}</h5>
     <p className='Sidep'>{number}</p>
    </div>
  )
}

export default SidebarOp