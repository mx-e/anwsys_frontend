import React from 'react'
import Comment from './comment'
import './comment-box.css'

class CommentBox extends React.Component {
  constructor() {
    super()
    this.state = {
      messageName: '',
      message: 'your message goes here'
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleNameChange = (event) => {
    const value = event.target.value
    this.setState(state => Object.assign(state, {}, {messageName: value}))
  }

  handleMessageChange = (event) => {
    const value = event.target.value
    this.setState(state => Object.assign(state, {}, {message: value}))
  }

  render() {
    return(
      <div className='commentBoxFrame'>
        Comments:
        <div className='commentsList'>
          {this.props.comments.map((comment,i) => (
              <Comment data={comment} key={i}/>
          ))}
        </div>
        <div>
          <form className='messageForm' onSubmit={this.handleSubmit}>
            <label className='inputElem'>
              Name:
              <br/>
              <input type='text' value={this.state.messageName} onChange={this.handleNameChange}/>
            </label>
            <label className='inputElem'>
              Message:
              <br/>
              <input className='messageInput' type='text' value={this.state.message} onChange={this.handleMessageChange}/>
            </label>
            <input className='submitButton' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default CommentBox