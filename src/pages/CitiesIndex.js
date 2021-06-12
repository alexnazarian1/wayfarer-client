import React from 'react';
import CityModel from '../models/CityModel';
import PostModel from '../models/PostModel';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';

class CitiesIndex extends React.Component {
    state = {
        cities: [],
        show: null,
        error: null,
    }

    fetchCityData = (indicator) => {
        CityModel.all()
            .then(response => {
                if (response.data.message) {
                    this.setState({
                        error: response.data.message,
                    });
                } else if (indicator === 0) {
                    this.setState({
                        cities: response.data.cities,
                        show: response.data.cities[0],
                    });
                } else {
                    const cities = response.data.cities;
                    const showCity = cities.filter(city => city._id === indicator);
                    this.setState({
                        cities: cities,
                        show: showCity[0],
                    })
                }
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                });
            });
    }

    componentDidMount() {
        this.fetchCityData(0);
    }

    handleClickyChange = (e) => {
        const index = e.target.className.slice(4);
        this.setState({
            show: this.state.cities[index],
        });
    }

    handleNewPost = (post) => {
        PostModel.create(post)
            .then(request => {
                this.fetchCityData(post.cityId);
            });
    }

    render() {
        if (this.state.cities.length === 0) return <h1>No Cities Found</h1>
        return (
            <div>
                <CityList cities={this.state.cities} handleClickyChange={this.handleClickyChange} />
                <CityShow city={this.state.show} handleNewPost={this.handleNewPost} />
            </div>
        );
    }
}

export default CitiesIndex;