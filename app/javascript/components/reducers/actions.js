// Actions
import * as types from './types'

export const addUser = (payload) => {
    return {type: types.ADD_USER, payload};
}

export const deleteUser = (payload) => {
    return { type: types.DELETE_USER, payload};
}

export const editUser = (payload) => {
    return { type: types.EDIT_USER, payload};
}

export const updateUser = (payload) => {
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