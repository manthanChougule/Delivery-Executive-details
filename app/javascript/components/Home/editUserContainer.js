//edit container.js
import EditUser from './editUserComponent'
import { connect } from 'react-redux'
import editUser from '../ducks/actions'

const mapDispatchToProps = { 
  editUser 
}


const editUserContainer = connect(
  null ,
  mapDispatchToProps
  )(EditUser)

export default editUserContainer