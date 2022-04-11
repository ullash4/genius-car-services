import React from 'react';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='col-md-6 col-lg-4'>
            <div className='text-center p-4 shadow rounded-3'>
            <img className='img-fluid' src={img} alt="" />
            <h5>{name}</h5>
            <button type="button" class="btn btn-outline-secondary">Book Now</button>
            </div>
        </div>
    );
};

export default Service;