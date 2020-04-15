// Actions
import * as types from '../reducers/types'

export function addUser(payload) {
    return {type: types.ADD_USER, payload};
}

export function deleteUser(payload) {
    return { type: types.DELETE_USER, payload};
}

export function editUser(payload) {
    return { type: types.EDIT_USER, payload};
}

export function updateUser(payload) {
    return { type: types.UPDATE_USER, payload};
}

//deleteSuccess
//updateSuccess
//

///selectores 

// export function getParams(state) {
//     return state.users.params
// }

// export function getUser(state, id) {
//     return state.users.byId[id];
// }

// export function getUsers(state) {
//     return Object.values(state.users.byId);
// }