
// container.js
import Listing from './lisitingUserComponent'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
  console.log("Hello Lisiting",state)
  return {
    users : state.users
  }
}

const lisitingUserContainer = connect(mapStateToProps)(Listing)

export default lisitingUserContainer