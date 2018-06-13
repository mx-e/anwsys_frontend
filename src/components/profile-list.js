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
        }
      ],
      comments: [
        {
          timestamp: 'Fri, 3:10PM',
          authorName: 'Jean-Philippe',
          id: 1,
          text: 'hi there, you suck!!!'
        }
      ],
      selectedProfileId: 1
    }
  }

  switchFocus = (id) => {
    this.setState(state => Object.assign(state, {}, {
      selectedProfileId: id
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
                          comments={this.state.comments.filter(comment => comment.id === profile.id)}/>
            </div>
          </div>
        </div>
      )
  }

}

export default ProfileList