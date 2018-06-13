import React from 'react'

const Comment = (props) => {
  return (
    <div>
      <ul>
        <li>{props.data.timestamp}</li>
        <li>from: {props.data.authorName} </li>
        <li>{props.data.text}</li>
      </ul>
    </div>
  )
}

export default Comment