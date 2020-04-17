//edit container.js
import EditUserComponent from './EditUserComponent'
import { connect } from 'react-redux'
import { userOperations } from '../ducks'

const mapDispatchToProps = dispatch => { 
  const updateUser = (value) => dispatch(userOperations.updatingUser(value))
  return {
    updateUser
  }
}


const EditUserContainer = connect(
  null ,
  mapDispatchToProps
  )(EditUserComponent)

export default EditUserContainer