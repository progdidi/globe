import HotelCard from '../../components/HotelCard/HotelCard';
import './hotelsPage.scss';

const HotelsPage = () => {
    return ( 
        <>

        <section className="hotels">
            <div className="container">
                <div className="hotels__inner">
                    <div className="hotels-filter">
                <h5 className="hotels-filter__title">Filters</h5>

                <div className="hotels-filter__item">
                    <h6 className="hotels-filter__item-title">Price</h6>

                    <input type="radio" />
                </div>
                <div className="hotels-filter__item">
                    <h6 className="hotels-filter__item-title">Rating</h6>

                    <div className="hotels-filter__rating">
                        <button className="hotels-filter__rating-btn">0+</button>
                        <button className="hotels-filter__rating-btn">1+</button>
                        <button className="hotels-filter__rating-btn">2+</button>
                        <button className="hotels-filter__rating-btn">3+</button>
                        <button className="hotels-filter__rating-btn">4+</button>
                    </div>
                </div>

                <div className="hotels-filter__item">
                    <h6 className="hotels-filter__item-title">Freebies</h6>

                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Free breakfast</label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Free parking</label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Free internet</label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Free airport shuttle
                    </label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Free cancellation
                    </label>

                </div>
                <div className="hotels-filter__item">
                    <h6 className="hotels-filter__item-title">Amenities</h6>

                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />24hr front desk</label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Air-conditioned</label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Fitness</label>
                    <label htmlFor="" className="hotels-filter__label">
                        <input type="checkbox" className="hotels-filter__input" />Pool
                    </label>
                    
                    <button>+24 more</button>
                </div>
                    </div>

                    <div className="hotels__items">
                        <HotelCard/>
                    </div>
                </div>
            </div>
        </section>

        
        
        </>
     );
}
 
export default HotelsPage;