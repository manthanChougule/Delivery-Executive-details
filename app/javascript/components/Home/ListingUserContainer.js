
// container.js
import LisitingUserComponent from './LisitingUserComponent'
import { connect } from 'react-redux' 


const mapStateToProps = (state) => {
  console.log("Hello Lisiting",state)
  return {
    users : state.users
  }
}

const LisitingUserContainer = connect(mapStateToProps)(LisitingUserComponent)

export default LisitingUserContainer