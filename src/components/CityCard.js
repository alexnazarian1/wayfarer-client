function CityCard(props) {
    return (
        <div>
            <h2 className={`city${props.index}`} onClick={props.handleClickyChange}>{props.city.name}</h2>
        </div>
    );
};

export default CityCard;