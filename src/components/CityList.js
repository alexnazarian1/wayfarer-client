import CityCard from './CityCard';

function CityList(props) {
    const cityCards = props.cities.map((city, index) => {
        return <CityCard key={city._id} city={city} handleClickyChange={props.handleClickyChange} index={index} />
    });
    return (
        <div>
            <h1>City List</h1>
            { cityCards }
        </div>
    );
};

export default CityList;