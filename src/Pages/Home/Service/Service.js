import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,name, img, description} = service;
    const navigate = useNavigate();
    const navigateToServiceDetails=()=>{
        navigate(`/service/${_id}`);
    }

    return (
        <div className='col-md-6 col-lg-4'>
            <div className='text-center p-4 shadow rounded-3'>
            <img className='img-fluid' src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetails(_id)} type="button" className="btn btn-outline-dark">Book Now</button>
            </div>
        </div>
    );
};

export default Service;