import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'

function CityListGroupItem(props) {
    return (
        <div>
        <ListGroup.Item action href={`#${props.city.urlName}`}>
            <Image thumbnail src={props.city.photo} alt={props.city.name} />
            <h2>{props.city.name}</h2>
        </ListGroup.Item>
        </div>
    );
};

export default CityListGroupItem;