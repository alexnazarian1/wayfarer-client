import { Col, Card, Button, Title } from "react-bootstrap";
import PostList from './PostList';

function CityShow(props) {
  return (
    <Col className="mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ maxHeight: 150}}/>
        <Card.Body>
          <Card.Title>{props.city.name}</Card.Title>
          <Card.Text>
            <strong>{props.city.country}</strong>: 
          </Card.Text>
            <img width="100px" className="city-image" src={props.city.photo} alt={props.city.name} />
          {/* <Button variant="danger" onClick={() => deleteCity(_id)}>Delete</Button> */}
          <div>
            <PostList posts={props.city.posts} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CityShow;




