import { Col, Card, Button, Title } from "react-bootstrap";

function CityShow(props) {
  // Destructuring 
  // const { title, publisher, coverArtUrl, _id } = props.city;
  // const { deleteCity } = props;


  return (
    <Col className="mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ maxHeight: 150}}/>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            <strong>City</strong>: 
          </Card.Text>

          <Card.Text>
            <strong>Country</strong>: 
          </Card.Text>

            <img width="100px" className="city-image" src="https://images.unsplash.com/photo-1612392167062-8f76710986ba?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />

          <Card.Text>
            <strong>Country</strong>: 
          </Card.Text>
          {/* <Button variant="danger" onClick={() => deleteCity(_id)}>Delete</Button> */}

        </Card.Body>
      </Card>
    </Col>
  );
}

export default CityShow;




