//edit container.js
import EditUserComponent from './EditUserComponent'
import { connect } from 'react-redux'
import editUser from '../ducks/actions'

const mapDispatchToProps = { 
  editUser 
}


const EditUserContainer = connect(
  null ,
  mapDispatchToProps
  )(EditUserComponent)

export default EditUserContainer