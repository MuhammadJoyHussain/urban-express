import React, { useEffect, useState } from 'react';
import Tickets from '../fakeData/fakeData.json';
import Ticket from './Ticket';




const Home = () => {
    const style = {
        display: 'flex'
    }

    const [ticket, setTicket] = useState([]);
  useEffect (()=>{
    setTicket(Tickets);
  }, []);



    return (
        <div style={style}>
            <>
            {
                ticket.map(ticket=> <Ticket ticket={ticket}></Ticket>)
            }
            </>
        </div>
    );
};

export default Home;