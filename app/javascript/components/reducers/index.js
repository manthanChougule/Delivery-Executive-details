// reducer

// import { createStore } from 'redux'
// export const store = createStore(formReucer)

const initial = {
    users: []
}

export function formReucer(state = initial ,action){
    switch(action.type){
        case 'ADD_USER':
			console.log("reducer")
			return {
				...state,
				users: state.users.concat([action.payload])
			} //state.concat([action.payload]); 
		case 'DELETE_USER':
			return state.filter((user) => action.payload !== action.id);
		case 'EDIT_USER':
			return state.map((user) => user.id === action.id ?
											{...user,editing:!user.editing}:user);
		case 'UPDATE':
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


