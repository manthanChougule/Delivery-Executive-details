// reducer

// import { createStore } from 'redux'
// export const store = createStore(formReucer)
import types from './types'
const initial = {
    users: []
}

const userReducer = (state = initial, action ) => {
    switch(action.type){
        case types.ADD_USER:
            console.log("reducer")
            console.log("")
            return {
				...state,
				users: state.users.concat([action.payload])
			} 
		case types.DELETE_USER:
            console.log("deleting")
			return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            }
		case types.EDIT_USER:
            console.log("editing")
			return {
                ...state,
                users: state.users.map((user) => user.id === action.payload ?
                {...user,editing:!user.editing}:user)
            }
		case types.UPDATE_USER:
            console.log("Updating")
			return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.payload.id){
              return {
                ...user,
                firstname:action.payload.newFirstName,
                lastname:action.payload.newLastName,
                contact:action.payload.newContact,
                address:action.payload.newAddress,
                editing:!user.editing
              }
                    } else return user;
                })
            }
		default:
			return state;
    }
}


export default userReducer