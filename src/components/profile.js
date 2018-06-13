import React from 'react'
import CommentBox from './comment-box'
import './profile.css'

const Profile = (props) => {

  return(
    <div className= 'profileBox'>
      <div className= 'dataPointList'>
        <div className='profileDataPoint'>
          Name: {props.name}
        </div>
        <div className='profileDataPoint'>
          Age: {props.age}
        </div>
        <div className='profileDataPoint'>
          Zodiac Sign: {props.sign}
        </div>
        <div className='profileDataPoint'>
          Degree Program: {props.subject}
        </div>
        <CommentBox id={props.id} comments={props.comments}/>
      </div>
    </div>
  )
}

export default Profile