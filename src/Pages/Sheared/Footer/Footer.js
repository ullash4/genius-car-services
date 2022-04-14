import React from 'react';

const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <div className='text-center text-white mt-5 bg-dark p-5 fixed-bottom'>
            <p>copyright @ {year}</p>
        </div>
    );
};

export default Footer;