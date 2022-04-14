import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name, img} = service;
    const navigate = useNavigate();
    const navigateToServiceDetails=()=>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='col-md-6 col-lg-4'>
            <div className='text-center p-4 shadow rounded-3'>
            <img className='img-fluid' src={img} alt="" />
            <h5>{name}</h5>
            <button onClick={()=>navigateToServiceDetails(id)} type="button" className="btn btn-outline-dark">Book Now</button>
            </div>
        </div>
    );
};

export default Service;