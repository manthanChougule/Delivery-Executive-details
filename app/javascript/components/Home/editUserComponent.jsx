import React,{ Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class EditUser extends Component {
  handleSubmit = (editUser) => {
    editUser( values)
  }
  render() {
    const values = { id: new Date(), newFirstname, newLastname, newContact, newAddress, editting: false};
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="newFirstname"
            name="newFirstname"
            label="New First Name"
            defaultValue={this.props.user.firstname}
            fullWidth
            helperText={touched.firstname ? errors.firstname : ""}
            error={touched.firstname && Boolean(errors.firstname)}
            onChange={change.bind(null ,"newFirstname")}

          />

          <TextField
            id="newLastname"
            name="newLastname"
            label="New Last Name"
            defaultValue={this.props.user.lastname} 
            fullWidth
            helperText={touched.lastname ? errors.lastname : ""}
            error={touched.lastname && Boolean(errors.lastname)}
            onChange={change.bind(null ,"newLastname")}
              
          />
          <TextField
            id="newContact"
            name="newContact"
            label="New Contact"
            defaultValue={this.props.user.contact}
            fullWidth
            helperText={touched.contact ? errors.contact : ""}
            error={touched.contact && Boolean(errors.contact)}
            onChange={change.bind(null ,"newContact")}
              
          />
          <TextField
            id="newAddress"
            name="newAddress"
            label="New Address"
            defaultValue={this.props.user.address}
            fullWidth
            helperText={touched.address ? errors.address : ""}
            error={touched.address && Boolean(errors.address)}
            onChange={change.bind(null ,"newAddress")}
          />
          <Button 
            type="submit" 
            variant="contained" color="primary">
            Update
          </Button>
        </form>
      </div>
    );
  }
}

export default EditUser