// reducer

// import { createStore } from 'redux'
// export const store = createStore(formReucer)
import * as types from './types'
const initial = {
    users: []
}

export const formReucer = (state = initial, action ) => {
    switch(action.type){
        case types.ADD_USER:
            console.log("reducer")
            console.log("")
            return {//state.users.concat([action.payload]); 
				...state,
				users: state.users.concat([action.payload])
			} 
		case types.DELETE_USER:
			return state.filter((user) => action.payload !== action.id);
		case types.EDIT_USER:
			return state.map((user) => user.id === action.id ?
											{...user,editing:!user.editing}:user);
		case types.EDIT_USER:
			return state.map((user) => {
				if(user.id === action.id){
          return {
            ...user,
            firstname:action.data.newFirstName,
            lastname:action.data.newLastName,
            contact:action.data.newContact,
            address:action.data.newAddress,
            editing:!user.editing
          }
				} else return user;
			})
		default:
			return state;
    }
}


