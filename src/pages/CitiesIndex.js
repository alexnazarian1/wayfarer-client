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

    handleClickyChange = (e) => {
        const index = e.target.className.slice(4);
        this.setState({
            show: this.state.cities[index],
        });
    }

    handleNewPost = (post, city) => {
        PostModel.create(post)
            .then(response => {
                const newPost = response.data.post;
                let cities = this.state.cities;
                cities = cities.filter(city => city._id !== city._id);
                city.posts.push(newPost);
                cities.push(city);
                this.setState({
                    cities: cities,
                });
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