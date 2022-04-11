import React from 'react';

const Expert = ({expert}) => {
    const {name, img}= expert;
    return (
        <div className='col-12 col-md-6 col-md-4'>
            <div className='text-center p-4 shadow-sm bg-secondary rounded-3'>
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div>
        </div>
    );
};

export default Expert;