import React from 'react';
import './Ticket.css'
import { useHistory } from 'react-router';

const Ticket = (props) => {
    const {title, price} = props.ticket;
    const history = useHistory();
    const handleTicket = (ticketType) => {
        history.push(`/destination/${ticketType}`);
    }

    return (
            <div className="ticket">
            <h2>{title}</h2>
            <button onClick={() => handleTicket()}>BUY NOW</button>
            <h1>{price}</h1>
        </div>
    );
};

export default Ticket;