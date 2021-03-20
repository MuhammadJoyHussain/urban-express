import React from 'react';
import { useParams } from 'react-router';
import Home from '../Home/Home';
import './Destination.css'
import fakeData from '../fakeData/fakeData.json'


const Destination = () => {
    const{ ticketType } = useParams;
    const ticket = fakeData.find(pd => pd.key === ticketType)

    return (
        <div>
           <Home tiket={ticket}></Home>
        </div>
    );
};

export default Destination;