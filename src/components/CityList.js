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
        return <CityTabPane key={city._id} city={city} handleNewPost={props.handleNewPost} />
    });
    return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
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