import './placeItem.scss';

//images
import example from './example.png';

const PlaceItem = () => {
    return ( 
        <div className="place">
            <img src={example} alt="" className="place__img" />
            <div className="place-info">
                <h6 className="place-info__title">Istanbul, Turkey</h6>
                <div className="place-info__links">
                    <a href="" className="place-info__link">Flights</a>
                    <a href="" className="place-info__link">Hotels</a>
                    <a href="" className="place-info__link">Resorts</a>
                </div>
            </div>
        </div>
     );
}
 
export default PlaceItem;