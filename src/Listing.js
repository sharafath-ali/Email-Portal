import React from 'react'
import './Listing.css'
function Listing({icon,title,color,selected}) {
  return (
    <div className={`Listing ${selected && 'Listing--selected'}`} style={{ color:`${color}`,borderBottom:`2px solid ${color} `}}>
    {icon} 
    <p>{title}</p>
    </div>
  )
}

export default Listing