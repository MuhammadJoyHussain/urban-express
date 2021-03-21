
import fakeData from '../fakeData/fakeData.json'
import DestinationDetails from './DestinationDetails';

const Destination = () => {
    const destination = fakeData
    
    
    
    return (
        <div>{
            destination.map(details => <DestinationDetails details={details}></DestinationDetails>)
            }
        </div>
    );
};

export default Destination;