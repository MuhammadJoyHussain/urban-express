import Ticket from '../Ticket/Ticket';
import fakeData from '../fakeData/fakeData.json';

const Home = () => {
    const style = {
        display: 'flex'
    }
    
    const ticket = fakeData

    return (
        <div style={style}>
            {
                ticket.map(tickets => <Ticket tickets={tickets}></Ticket>)
            }
        </div>
    );
};

export default Home;