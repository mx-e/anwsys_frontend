import React from 'react'
import Profile from './profile'
import './profile-list.css'

class ProfileList extends React.Component {
  constructor() {
    super();
    this.state = {
      profileCount: 4,
      profileList: [
        {
          id: 1,
          name: 'Max',
          age: 22,
          sign: 'scorpio',
          subject: 'computer science'
        },
        {
          id: 2,
          name: 'Jan',
          age: 25,
          sign: 'sagitarius',
          subject: 'economics'
        }
      ],
      comments: [
        {
          timestamp: 'Fri, 3:10PM',
          authorName: 'Jean-Philippe',
          id: 1,
          text: 'hi there, you suck!!!'
        },
        {
          timestamp: 'Fri, 3:10PM',
          authorName: 'Jean-Philippe',
          id: 2,
          text: 'hi there, you suck!!!'
        },
        {
          timestamp: 'Fri, 4:10PM',
          authorName: 'Jean-Claude',
          id: 1,
          text: 'jup!!!'
        },
      ],
      selectedProfileId: 1
    }
  }

  switchFocus = (id) => {
    this.setState(state => Object.assign(state, {}, {
      selectedProfileId: id
    }))
  }

  addComment = (name, text, id) => {
    this.setState(state => Object.assign(state, {}, {
      comments: state.comments.concat([{
        timestamp: 'now',
        authorName: name,
        id: id,
        text: text
        }])
    }))
  }

  render() {
    const profile = this.state.profileList.find(listElem => listElem.id === this.state.selectedProfileId)
    return (
        <div className='profileList' >
          <div className='sideBar'>
            {this.state.profileList.map(p => (
              <div className='listItem' key={p.id} onClick={() => this.switchFocus(p.id)}>
                {p.name}
              </div>
            ))}
          </div>
          <div className='contentBox'>

            <div><Profile id={profile.id} name={profile.name} age={profile.age}
                          sign={profile.sign} subject={profile.subject}
                          comments={this.state.comments.filter(comment => comment.id === profile.id)}
                          commentAdder={this.addComment}/>
            </div>
          </div>
        </div>
      )
  }

}

export default ProfileList