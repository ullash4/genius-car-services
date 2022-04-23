import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService]= useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setService(data))
    },[serviceId])
    return (
        <div>
            <h1>This is service details :{serviceId}</h1>
            <h1>our service name {service.name}</h1>
            <Link to={'/checkout'}>
                <Button>Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;