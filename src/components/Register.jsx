import React, { Fragment, useState } from 'react';
import { Button, Container, Col, Form ,Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {register} from "../actions/auth"
import PropTypes from 'prop-types';


const Register = ({register}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const { name,email, password } = formData;
	const onChange = e => 
	setFormData({ ...formData, [e.target.name]: e.target.value })
	console.log(formData)
	
	const onClick = e=>{
		e.preventDefault();
		console.log(formData)
		register({email,password})
	}
	
	return (
		<Container className="LPC d-flex justify-content-center">
			<Row className="mt-5">
			<Col sm={12} className="mt-5">
			<h1 className="text-center">REGISTER NOW</h1>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control name="email" type="email" value={email} placeholder="Enter email"
							onChange={e => onChange(e)}

						/>

					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control name="password" value={password} type="password" placeholder="Password"
							onChange={e => onChange(e)}
						/>
					</Form.Group>

					<Button style={{ backgroundColor: "white", color: "black" }} onClick={e=>onClick(e)} type="submit">
						Submit
  </Button>
				</Form>
			</Col>
			</Row>
		</Container>
	);
}

Register.propTypes={
	regiter:PropTypes.func.isRequired,
}

export default connect(
	null,
	{register}
)(Register);