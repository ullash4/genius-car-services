import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';

const ServiceDetails = () => {
    
    const [service, serviceId] = useServiceDetail();
    return (
        <div>
            <h1>This is service details :{serviceId}</h1>
            <h1>our service name {service.name}</h1>
            <Link to={`/checkout/${serviceId}`}>
                <Button>Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;