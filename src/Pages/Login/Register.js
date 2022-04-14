import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister =(e)=>{
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, firstName, lastName);
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

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control placeholder="Confirm Password" type='password' />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Accept All terms and conditions" />
        </Form.Group>
        <p>Already have an account ? <Link to={'/login'} className='text-primary text-decoration-none'>Log In</Link> </p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
