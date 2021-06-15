import React from 'react';
import CityModel from '../models/CityModel';
import CityList from '../components/CityList';

import { Container } from "react-bootstrap";

class CitiesIndex extends React.Component {
    state = {
        cities: [],
        error: null,
    }

    fetchCityData = () => {
        CityModel.all()
            .then(response => {
                if (response.data.message) {
                    this.setState({
                        error: response.data.message,
                    });
                } else {
                    this.setState({
                        cities: response.data.cities,
                    });
                };
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                });
            });
    }

    componentDidMount() {
        this.fetchCityData();
    }

    render() {
        if (this.state.cities.length === 0) return <h1>No Cities Found</h1>
        return (
            <Container className='cities-index'>
                <CityList cities={this.state.cities} />
            </Container>
        );
    }
}

export default CitiesIndex;