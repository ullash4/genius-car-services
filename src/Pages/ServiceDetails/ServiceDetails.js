import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    return (
        <div>
            <h1>This is service details :{serviceId}</h1>
            <Link to={'/checkout'}>
                <Button>Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;