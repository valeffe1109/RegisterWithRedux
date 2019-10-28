import axios from 'axios'


const setAuthToken = result => {
	if(result){
   axios.defaults.headers.common['x-auth-result'] = result;

	} else {
		delete axios.defaults.headers.common['x-auth-result'];
	}
}


export default setAuthToken;