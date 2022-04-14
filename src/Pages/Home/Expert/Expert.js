import React from 'react';

const Expert = ({expert}) => {
    const {name, img}= expert;
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className='text-center p-4 shadow-sm bg-dark rounded-3'>
            <img className='rounded-3 shadow' src={img} alt="" />
            <h5 className='text-white'>{name}</h5>
        </div>
        </div>
    );
};

export default Expert;