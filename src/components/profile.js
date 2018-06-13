import React from 'react'
import CommentBox from './comment-box'

const Profile = (props) => {

  return(
    <div>
      <ul>
        <li>
          Name: {props.name}
        </li>
        <li>
          Age: {props.age}
        </li>
        <li>
          Zodiac Sign: {props.sign}
        </li>
        <li>
          Degree Program: {props.subject}
        </li>
        <CommentBox id={props.id} comments={props.comments}/>
      </ul>
    </div>
  )
}

export default Profile