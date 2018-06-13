import React from 'react'
import './comment.css'

const Comment = (props) => {
  return (
    <div className='commentBox'>
      <div className='commentContent'>
        <div className='time'>{props.data.timestamp}</div>
        <div className='from'>from: {props.data.authorName} </div>
        <div className='commentText'>{props.data.text}</div>
      </div>
    </div>
  )
}

export default Comment