import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();

    const data = services.find(service => service.key === Number(serviceId));
    return (
        <div className="container">
            <div className="d-lg-flex align-items-center my-5 mx-auto">
                <div className="m-5">
                    <h1 className=" fw-bold text-color">{data?.name}</h1>
                    <p>{data?.detail}</p>
                </div>
                <img className="img-fluid" src={data?.img} alt="" />
            </div>
            <div className="d-lg-flex align-items-center my-5">
                <img className="img-fluid" src="https://disin-react.hibootstrap.com/images/about1.jpg" alt="" />
                <div className="m-5">
                    <h1 className=" fw-bold"><span className="text-color">About</span> Our Hospital</h1>
                    <br />
                    <h5>Our Patient are Our Priority, We Offer Quality Medical Services of Specialists. More details about our services below.</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;