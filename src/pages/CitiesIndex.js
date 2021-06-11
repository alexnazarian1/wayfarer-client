import React from 'react';
import CityModel from '../models/CityModel';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';

class CitiesIndex extends React.Component {
    state = {
        cities: [],
        show: null,
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
                        show: response.data.cities[0],
                    });
                }
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

    handleClickyChange = (e) => {
        const index = e.target.className.slice(4);
        this.setState({
            show: this.state.cities[index],
        });
    }

    render() {
        if (this.state.cities.length === 0) return <h1>No Cities Found</h1>
        return (
            <div>
                <CityList cities={this.state.cities} handleClickyChange={this.handleClickyChange} />
                <CityShow city={this.state.show} />
            </div>
        );
    }
}

export default CitiesIndex;