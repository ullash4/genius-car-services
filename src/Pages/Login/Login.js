import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Sociallogin from "./Sociallogin/Sociallogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Sheared/PageTitle/PageTitle";

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );

    let errorElement;
    if(error){
      errorElement=<div>
        <p>error: {error.message}</p>
      </div>
    }

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const location = useLocation()

    let from = location.state?.from?.pathname || '/';

    const handleSubmitForm=(e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate(from, {replace: true})
    }

    const handleResetPassword= async()=>{
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email)
        toast('Reset password sent to your Email ')
      }else{
        toast('Please enter your email address')
      }
    }

  return (
    <>
    <PageTitle title='login'></PageTitle>
      <Form onSubmit={handleSubmitForm} className="container my-5 shadow-lg p-5 w-50 mx-auto">
          <h1 className="text-center my-3">Log In</h1>
          {errorElement}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      <p>New to Genius Car ?  <Link to={'/register'} className='text-primary text-decoration-none'>Register Here</Link> </p>
      <p>Forget Your password ? <button onClick={handleResetPassword} className="btn btn-link text-decoration-none">Reset Password</button> </p>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        
      </Form>
      <ToastContainer />
      <Sociallogin></Sociallogin>
    </>
  );
};

export default Login;
