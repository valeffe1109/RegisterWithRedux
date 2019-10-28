import React,{Fragment,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import {Provider} from 'react-redux'
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken'

if(localStorage.result){
	setAuthToken(localStorage.result);
	 }


const App = () =>{

   useEffect(() =>{
	   store.dispatch(loadUser());
   },[]);



	return (
	<Provider store={store}>
    <Register/>
	</Provider>
	)
}




export default App;
