import PostList from './PostList';

import { Col, Row, Image, Tab } from 'react-bootstrap';

function CityTabPane(props) {
  return (
    <Tab.Pane eventKey={`#${props.city.urlName}`}>
        <Row>
          <Col>
            <h1>{props.city.name}</h1>
            <h3>{props.city.country}</h3>
          </Col>
          <Col>
            <Image className="image-show" src={props.city.photo} alt={props.city.name} />
          </Col>
        </Row>
        <PostList city={props.city} />
    </Tab.Pane>
  );
}

export default CityTabPane;




