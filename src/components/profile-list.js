import React from 'react'
import Profile from './profile'

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
      ]
    }
  }

  render() {
    return(
        <div>
          {this.state.profileList.map( profile  => (
            <div><Profile id={profile.id} name={profile.name} age={profile.age}
                          sign={profile.sign} subject={profile.subject}
                          comments={this.state.comments.filter(comment => comment.id === profile.id)}/>
            </div>
          ))}
        </div>
      )
  }

}

export default ProfileList