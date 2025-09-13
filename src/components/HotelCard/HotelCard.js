import './hotelCard.scss';

//images
import example from './example.png';
import location from './location.svg';
import aminity from './cafe.svg';
import like from './like.svg';
import star from './star.svg';

const HotelCard = () => {
    return ( 
        <div className="hotel">
            <img src={example} alt="" className="hotel__img" />

            <div className="hotel__info">

                <p className="">9 images</p>
                <h6 className="hotel__title">CVK Park Bosphorus Hotel Istanbul</h6>

                <div className="hotel__location">
                    <img src={location} alt="" className="hotel__location-img" />
                    <p className="hotel__location-address">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                </div>


                <div className="hotel__rating">
                    <div className="hotel__stars">
                        <img src={star} alt="" className="hotel__stars-img" />
                        <img src={star} alt="" className="hotel__stars-img" />
                        <img src={star} alt="" className="hotel__stars-img" />
                        <img src={star} alt="" className="hotel__stars-img" />
                        <img src={star} alt="" className="hotel__stars-img" />
                    </div>
                    5 Star Hotel
                </div>

                <div className="hotel__aminities">
                    <img src={aminity} alt="" className="hotel__aminities-img" />
                    <span>20+ </span>Aminities
                </div>

                <div className="hotel__reviews"></div>

                <div className="hotel__price"></div>

                <div className="hotel__buttons">
                    <button className="hotel__btn-like"></button>
                    <a href="" className="hotel__link">View Place</a>
                </div>
            </div>
        </div>
     );
}
 
export default HotelCard;