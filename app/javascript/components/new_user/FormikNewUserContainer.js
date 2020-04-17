import FormikNewUserComopnent from './FormikNewUserComponent'
import { connect } from 'react-redux'
import addUser from '../ducks'

const mapDispatchToProps = {
    addUser
}

const FormikNewUserContainer = connect(
    null,
    mapDispatchToProps)(FormikNewUserComopnent)

export default FormikNewUserContainer