import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const handleSubmitForm=(e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const handleRegisterNavigate=()=>{
        navigate('/register')
    }

  return (
    <>
      <Form onSubmit={handleSubmitForm} className="container my-5 shadow-lg p-5 w-50 mx-auto">
          <h1 className="text-center my-3">Log In</h1>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;