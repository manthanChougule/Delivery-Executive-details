import React, { Component } from 'react'
import newUserContainer from './newUserContainer'
import EditUser from './editUserContainer'

class Listing extends Component {
  render() {
    return(
      <div>
        <h1>All User</h1>
        {this.props.users.map((user) => (
          <div key={user.id}>
            {user.editing ? <EditUser user={user} key={user.id}/> :
                            <newUserContainer key={user.id} user={user} />}
          </div>
        ))}
      </div>
    );
  }
}

export default Listing