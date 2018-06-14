import types from "../actions/types";

const DEFAULT_STATE = {
	message: "",
	roomName: "",
	email: "",
	username: "",
	password: "",
	confirmPassword: ""
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case types.UPDATE_INPUT:
			return {
				...state,
				[action.payload.name]: action.payload.value //have to set in brackets since it has a variable;
			};
		case types.CLEAR_INPUT:
			return {
				...state,
				[action.payload]: ""
			};
		default:
			return state;
	}
};
