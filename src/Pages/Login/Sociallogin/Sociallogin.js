import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

const Sociallogin = () => {
    return (
        <div className='container w-50'>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{height: '2px'}} />
                <p className='mx-3 mt-2' >Or</p>
                <div className='bg-primary w-50' style={{height: '2px'}}  />
            </div>
            <Button className='w-100 rounded-pill p-2 bg-dark fs-4 d-flex align-items-center justify-content-center border-0 '> <FcGoogle className='fs-3 me-2' /> Google signIn </Button>
            <Button className='w-100 rounded-pill p-2 bg-dark fs-4 d-flex align-items-center justify-content-center my-3 border-0'> <SiFacebook className='fs-3 me-2 text-primary' /> Facebook signIn </Button>
            <Button className='w-100 rounded-pill p-2 bg-dark fs-4 d-flex align-items-center justify-content-center border-0'> <BsGithub className='fs-3 me-2' /> Github signIn </Button>
        </div>
    );
};

export default Sociallogin;