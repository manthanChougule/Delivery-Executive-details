import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'



class NewUserComponent extends Component {
    render() {
      return(
        <div>
          <h2>First Name: {this.props.user.firstname}</h2>
          <h2>Last Name: {this.props.user.lastname}</h2>
          <h2>Contact: {this.props.user.contact}</h2>
          <h2>Address: {this.props.user.address}</h2>
            <Button variant="contained" color="primary" startIcon={<EditIcon />}
              onClick={()=>this.props.editUser(this.props.user.id)}> 
              Edit 
            </Button>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}
              onClick={()=>this.props.deleteUser(this.props.user.id)}>
              Delete
            </Button>
        </div>
      );
    }
}

export default NewUserComponent