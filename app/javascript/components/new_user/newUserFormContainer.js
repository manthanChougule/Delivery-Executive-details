

///Container 
import NewUser from './newUserFormComponent'
import { connect } from 'react-redux'
import addUser from '../ducks/actions'


const mapDisptchToProps = {
   addUser
}
const newUserFormContainer = connect(
  null,
  mapDisptchToProps)
  (NewUser)

export default newUserFormContainer