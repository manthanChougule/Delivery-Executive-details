// Actions
import types from './types'

const addUser = (payload) => {
  return {type: types.ADD_USER, payload};
}

const deleteUser = (payload) => {
  return { type: types.DELETE_USER, payload};
}

const editUser = (payload) => {
  return { type: types.EDIT_USER, payload};
}

const updateUser = (payload) => {
  return { type: types.UPDATE_USER, payload};
}

export default {
  addUser,
  deleteUser,
  editUser,
  updateUser
}