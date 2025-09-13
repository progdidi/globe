import './flightsItem.scss';

const FlightsItem = () => {
    return ( 
        <div className="flights-item">
            <h3 className="flights-item__title">Melbourne</h3>
            <p className="flights-item__descr">An amazing journey</p>
            <p className="flights-item__price">$ 700</p>
            <button className="flights-item__btn">Book Flight</button>
        </div>
     );
}
 
export default FlightsItem;