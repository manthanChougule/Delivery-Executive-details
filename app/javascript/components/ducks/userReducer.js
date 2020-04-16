// reducer

// import { createStore } from 'redux'
// export const store = createStore(formReucer)
import { default as types } from './types'
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
			return state.users.filter((user) => action.payload !== action.id);
		case types.EDIT_USER:
			return state.users.map((user) => user.id === action.id ?
											{...user,editing:!user.editing}:user);
		case types.EDIT_USER:
			return state.users.map((user) => {
				if(user.id === action.id){
          return {
            ...user,
            firstname:action.values.newFirstName,
            lastname:action.values.newLastName,
            contact:action.values.newContact,
            address:action.values.newAddress,
            editing:!user.editing
          }
				} else return user;
			})
		default:
			return state;
    }
}


export default userReducer