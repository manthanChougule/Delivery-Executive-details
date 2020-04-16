

//user container.js
import NewUserComponent from './NewUserComponent'
import { connect } from 'react-redux'
import deleteUser from '../ducks/actions'
import editUser from '../ducks/actions'

const mapDispatchToProps = {
  deleteUser,
  editUser
}

const NewUserContainer = connect(null ,mapDispatchToProps)(NewUserComponent)

export default NewUserContainer