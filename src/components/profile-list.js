import React from 'react'
import Profile from './profile'
import './profile-list.css'
import { server } from '../data-request'

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
  server.post('/TeamDirectory/API/comments', {
      authorName: name,
      id: id,
      text: text,
      timestamp: Date.now().toString()
    })
    .then(function (response) {
      console.log(response);
      server.get('/TeamDirectory/API/comments')
        .then( (response) => {
          this.setState(state => Object.assign(state, {}, {
            comments: response
          }))
        })
    })
  }

  getComments = () => {
    server.get('/TeamDirectory/API/comments')
      .then( (response) => {
        this.setState(state => Object.assign(state, {}, {
          comments: response
        }))
      })
  }

  getUsers = (url) => {
    server.get(url)
      .then( (response) => {
        this.setState(state => Object.assign(state, {}, {
          profileList: response
        }))
      })
  }

  componentDidMount(){
    this.getUsers('/TeamDirectoryWeb/API/user')
    this.getComments()
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