import React, { Component } from 'react'
import NewUserContainer from './NewUserContainer'
import EditUserContainer from './EditUserContainer'

class LisitingUserComponent extends Component {
  render() {
    return(
      <div>
        <h1>All User</h1>
        {this.props.users.map((user) => (
          <div key={user.id}>
            {user.editing ? <EditUserContainer user={user} key={user.id}/> :
                            <NewUserContainer key={user.id} user={user} />}
          </div>
        ))}
      </div>
    );
  }
}

export default LisitingUserComponent