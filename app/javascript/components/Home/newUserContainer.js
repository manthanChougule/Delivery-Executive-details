

//user container.js
import User from './newUserComponent'
import { connect } from 'react-redux'
import deleteUser from '../ducks/actions'
import editUser from '../ducks/actions'

const mapDispatchToProps = {
  deleteUser,
  editUser
}

const newUserContainer = connect(null ,mapDispatchToProps)(User)

export default newUserContainer