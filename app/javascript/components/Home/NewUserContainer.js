

//user container.js
import NewUserComponent from './NewUserComponent'
import { connect } from 'react-redux'
import { userOperations }from '../ducks'

const mapDispatchToProps = dispatch => {
  const deleteUser = (value) => dispatch(userOperations.deletingUser(value));
  const editUser = (value) => dispatch(userOperations.editingUser(value))
  return {
    deleteUser,
    editUser
  }
}

const NewUserContainer = connect(null ,mapDispatchToProps)(NewUserComponent)

export default NewUserContainer