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

