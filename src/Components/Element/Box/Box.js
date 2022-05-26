import React from 'react'
import './Box.css'

const BlockBox = (props) => {
  return (
    <div className='BlockBox-main'>
        {props.children}
    </div>
  )
}

export default BlockBox