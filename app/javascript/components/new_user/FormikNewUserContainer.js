import FormikNewUserComopnent from './FormikNewUserComponent'
import { connect } from 'react-redux'
import { userOperations } from '../ducks'

const mapDispatchToProps = dispatch => {
    const addUser = (values) => dispatch(userOperations.addingUser(values))
    return {
        addUser
    }
};

const FormikNewUserContainer = connect(
    null,
    mapDispatchToProps)(FormikNewUserComopnent)

export default FormikNewUserContainer