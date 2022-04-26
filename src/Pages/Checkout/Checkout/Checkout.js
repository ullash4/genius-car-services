import React from 'react';
import useServiceDetail from '../../../Hooks/useServiceDetail';
// import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const [service, serviceId] = useServiceDetail();
    const [user] = useAuthState(auth);
    
   const handlePlaceOrder=(e)=>{
       e.preventDefault();
       const order={
        email: user.email,
        service : service.name,
         serviceId: serviceId,
         address: e.target.address.value,
         phone: e.target.phone.value
       }
        axios.post('http://localhost:5000/order', order)
        .then(response=>{
            console.log(response);
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked')
                e.target.reset();
            }
        })

   }
    
    return (
        <div className='w-50 mx-auto my-5 text-center'>
            <h5>Please checkout your booking</h5>
            <h5>This is service details :{serviceId}</h5>
            <h5>our service name {service.name}</h5>
            <img width={100} height={100} src={user?.photoURL} alt="" />
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 py-2 rounded-3 mb-2 border-1' type="text" name="name" value={user?.displayName} placeholder='Name' required readOnly disabled/>
                <br />
                <input className='w-100 py-2 rounded-3 mb-2 border-1' type="email" name="email"  value={user.email} placeholder='Email' required />
                <br />
                <input className='w-100 py-2 rounded-3 mb-2 border-1' type="text" name="service" value={service.name} placeholder='Service Name' readOnly required disabled/>
                <br />
                <input className='w-100 py-2 rounded-3 mb-2 border-1' type="text" name="address"  placeholder='Address' autoCapitalize='on' required />
                <br />
                <input className='w-100 py-2 rounded-3 mb-2 border-1' type="text" name="phone" placeholder='phone Number' autoComplete='off' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;