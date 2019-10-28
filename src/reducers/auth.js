import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	VALID_TOKEN,
	AUTH_ERROR
} from '../actions/types'

const initialState = {
	result:localStorage.getItem('result'),
	isAuthenticated: null,
	loading:true,
	user:null,
	isValid:false
}


export default function(state=initialState,action){
const {type,payload} = action;

switch(type){
	case VALID_TOKEN:
		return {
			...state,
			isAuthenticated:true,
			loading:false,
			isValid:payload
		}

case REGISTER_SUCCESS:
	localStorage.setItem('result',payload.result);
	return{
		...state,
		...payload,
		isAuthenticated:true,
		loading:false

	}

	case REGISTER_FAIL:
	case AUTH_ERROR:
		localStorage.removeItem('result')
		return{
			...state,
			result:null,
			isAuthenticated:false,
			loading:false
		};
	default:
		return state;


}
}