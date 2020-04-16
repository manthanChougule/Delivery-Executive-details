

///Container 
import NewUserFormComponent from './NewUserFormComponent'
import { connect } from 'react-redux'
import addUser from '../ducks/actions'


const mapDisptchToProps = {
   addUser
}
const NewUserFormContainer = connect(
  null,
  mapDisptchToProps)
  (NewUserFormComponent)

export default NewUserFormContainer