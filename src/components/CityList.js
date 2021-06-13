import CityListGroupItem from './CityListGroupItem';
import CityTabPane from './CityTabPane';

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CityList(props) {
    const cityListItems = props.cities.map((city, index) => {
        return <CityListGroupItem key={city._id} city={city} />
    });
    const cityTabPanes = props.cities.map((city, index) => {
        return <CityTabPane key={city._id} city={city} />
    });
    return (
            <Tab.Container id="city-tabs" defaultActiveKey={`#${props.cities[0].urlName}`}>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        { cityListItems }
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        { cityTabPanes }
                    </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
    );
};

export default CityList;