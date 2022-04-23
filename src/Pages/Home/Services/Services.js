import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices()
    return (
        <div className='container '>
            <h1 className='text-center mt-5'>serviecs:{services.length}</h1>
            <div className='row g-4'>
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;