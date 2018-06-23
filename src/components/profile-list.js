import React from 'react'

class ProfileList extends React.Component {
  constructor() {
    super();
    this.state = {
      profileList: [
      ],
      comments: [
      ],
      selectedProfileId: 1
    }
  }

  switchFocus = (id) => {
  }

  addComment = (name, text, id) => {
  }


  componentDidMount(){
    this.getUsers('/TeamDirectoryWeb/API/user')
    this.getComments()
  }

  render() {
    return (

      )
  }

}

export default ProfileList