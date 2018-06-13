import React from 'react'
import Comment from './comment'

class CommentBox extends React.Component {
  constructor() {
    super()
    this.state = {
      messageName: '',
      message: 'your message goes here'
    }
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.comments.map(comment => (
            <li>
              <Comment data={comment}/>
            </li>
          ))}
        </ul>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type='text' value={this.state.messageName} onChange={this.handleNameChange}/>
            </label>
            <label>
              Message:
              <input type='text' value={this.state.message} onChange={this.handleMessageChange}/>
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default CommentBox