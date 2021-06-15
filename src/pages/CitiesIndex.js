import React from 'react';
import CityList from '../components/CityList';

import { Container } from "react-bootstrap";

function CitiesIndex(props) {
    if (props.cities.length === 0) return <h1>No Cities Found</h1>
        return (
            <Container className='cities-index'>
                <CityList cities={props.cities} />
            </Container>
        );
}

export default CitiesIndex;