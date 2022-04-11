import React from 'react';

const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <div>
            <p><small>copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;