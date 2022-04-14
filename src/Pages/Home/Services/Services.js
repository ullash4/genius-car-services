import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className='container '>
            <h1 className='text-center mt-5'>serviecs:{services.length}</h1>
            <div className='row g-4'>
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;