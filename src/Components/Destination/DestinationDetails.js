import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../images/googlemap.jfif'

const DestinationDetails = ({ title, price, handleLogout }) => {
    const { id } = useParams();
    return (

        <div className="ticket">
            <section className="logout">
                <button onClick={handleLogout}>Logout</button>
                <h2>{title}</h2>
                <button>Confirm</button>
                <h1>{price}</h1>
            </section>
            <img src={img} alt=""/>
        </div>
    );
};

export default DestinationDetails;