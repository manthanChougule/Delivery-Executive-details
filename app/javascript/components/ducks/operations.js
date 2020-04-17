import actions from './actions'

const addingUser = (value) => {
    return dispatch => {
        dispatch(actions.addUser(value))
    }
}

const deletingUser = (value) => {
    return dispatch => {
        dispatch(actions.deleteUser(value))
    }
}

const editingUser = (value) => {
    return dispatch => {
        dispatch(actions.editUser(value))
    }
}

const updatingUser = (value) => {
    return dispatch => {
        dispatch(actions.updateUser(value))
    }
}

export default {
    addingUser,
    deletingUser,
    editingUser,
    updatingUser
}