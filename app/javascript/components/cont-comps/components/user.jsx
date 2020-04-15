import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

import { deleteUser , editUser }  from '../../reducers/actions'


class User extends Component {
    render() {
      return(
        <div>
          <h2>First Name: {this.props.user.firstname}</h2>
          <h2>Last Name: {this.props.user.lastname}</h2>
          <h2>Contact: {this.props.user.contact}</h2>
          <h2>Address: {this.props.user.address}</h2>
            <Button variant="contained" color="primary" startIcon={<EditIcon />}
              onClick={deleteUser(user)}> 
              Edit 
            </Button>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}
              onClick={editUser(user)}>
              Delete
            </Button>
        </div>
      );
    }
  }

  const mapDispatchToProps = {
    deleteUser,
    editUser
  }
  
  export default connect(null ,mapDispatchToProps)(User)