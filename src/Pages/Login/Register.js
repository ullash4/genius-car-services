import { async } from "@firebase/util";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Sociallogin from "./Sociallogin/Sociallogin";

const Register = () => {

    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile] = useUpdateProfile(auth);

      
      if(user){
        console.log(user);
      }
      
    const handleRegister =async (e)=>{
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const name = firstName +' '+ lastName;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/')
      }
      

  return (
    <>
      <Form onSubmit={handleRegister} className='container my-5 p-5 shadow-lg rounded-3 w-50 mx-auto'>
          <h1 className="text-center mb-5">Register</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Your Email" name='email' type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Password" name='password' type='password' />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
        
          <Form.Check onClick={()=>setAgree(!agree)} className={`mx-2 ${agree ? 'text-primary' : 'text-danger'}`}  type="checkbox" name="terms" label="Accept All terms and conditions" />
        </Form.Group>
        <p>Already have an account ? <Link to={'/login'} className='text-primary text-decoration-none'>Log In</Link> </p>
        <Button disabled={!agree} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Sociallogin></Sociallogin>
    </>
  );
};

export default Register;
