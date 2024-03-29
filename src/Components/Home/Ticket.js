import React from 'react';
import './Ticket.css'
import { useHistory } from 'react-router-dom';

const Ticket = (props) => {
    const {title, price} = props.ticket;
    

    return (
            <div className="ticket">
            <h2>{title}</h2>
            <Link to={`/destination/${id}`}><button>BUY NOW</button></Link>
            <h1>{price}</h1>
            
        </div>
    );
};

export default Ticket;