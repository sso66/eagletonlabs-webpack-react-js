// src/redux/modules/currentTime.js
console.log("Mounting currentTime.js ... ");

export const types = {
    FETCH_NEW_TIME: 'FETCH_NEW_TIME',
}

// Set the intial state for the first time the reducer is 
// called (which redux expects us to return an initial state. 
//..............................................................
const initialState = {
	currentTime: new Date(),
}

// The reducer function receive two arguments when it's called:
// 1. The state tree
// 2. The action which trigger a change
//...............................................................
export const reducer = (state = initialState, actions) => {
	return state;
}

// Actions are POJOs - Object literal - that must have a type
// property to the type of action that is being performed. The 
// type property should be a string.
//...............................................................
export const actions = {
    
    // An action creater is a Function that is expected 
    // to return an action (type and payload, as well as 
    // meta data - if any).
	updateTime: () => ({ 
		type: types.FETCH_NEW_TIME
	}),
}

// eof
