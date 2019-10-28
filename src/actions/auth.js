import axios from 'axios'
import {REGISTER_SUCCESS,
REGISTER_FAIL,
VALID_TOKEN,
AUTH_ERROR } from './types'
import setAuthToken from '../utils/setAuthToken'



//LOAD USER

export const loadUser = () => async dispatch => {

	const config = {
		headers:{
			'Content-Type':'application/json'
		}
	}
	const body = localStorage.result
	const res = await axios.post('http://razshare.zapto.org/user/auth',body,config);
	if(res.data.result===true){
		dispatch({
			type:VALID_TOKEN,
			payload:res.data.result
		});
		console.log(res.data.result)
	}
	else{
		dispatch({
			type:AUTH_ERROR
		})
	}
}






// REGISTER A NEW USER 
export const register = ({email,password})=>async dispatch=>{
 const config = {
	 headers:{
		 'Content-Type':'application/json'
	 }
 }


const body = JSON.stringify({email,password})

try {
	const res = await axios.post('http://razshare.zapto.org/user/create?token',body,config);
	dispatch({
		type:REGISTER_SUCCESS,
		payload:res.data
	})
	console.log(res.data)
} catch (err) {
	console.log(err)
	dispatch({
		type:REGISTER_FAIL
	});
	
}
}