import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [order, setOrder] = useState([])
    const [user] = useAuthState(auth)
    // useEffect(()=>{
    //     const url = `http://localhost:5000/order`;
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setOrder(data))
    // },[])

    useEffect(()=>{
        const callOrders= async()=>{
            const url = `http://localhost:5000/order?email=${user?.email}`;

             try{
                const {data} = await axios.get(url,{
                    headers:{
                       authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
               setOrder(data)
             }catch(error){
                console.log(error.message);
             }
        }
        callOrders()
    },[])


    return (
        <div>
            <h1>this is order page{order.length}</h1>
        </div>
    );
};

export default Orders;