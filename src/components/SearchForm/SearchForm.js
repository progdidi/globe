import './searchForm.scss';

//images
import flight from './icons/flight.svg';
import direction from './icons/direct.svg';
import down from './icons/down.svg';
import show from './icons/show.svg';
import stay from './icons/stay.svg';

const SearchForm = () => {
    return ( 
        <div className="search">
            <div className="container">
                <div className="search__inner">
                    <div className="search__tabs">
                        <button className="search-btn" data-search="flights">
                            <img src={flight} alt="" className="search-btn__img" /> Flights
                        </button>
                        <button className="search-btn" data-search="stays">
                            <img src={stay} alt="" className="search-btn__img" /> Stays
                        </button>
                    </div>

                    <div className="search__info" data-search="flights">
                        <form action="" className="flight-search__form">
                            <div className="flight-search__data">
                                <input type="text" className="flight-search__form-input" placeholder='Lahore - Karachi'/>
                                <input type="text" className="flight-search__form-input" placeholder='Return'/>
                                <input type="text" className="flight-search__form-input" placeholder='07 Nov 22 - 13 Nov 22'/>
                                <input type="text" className="flight-search__form-input" placeholder='1 Passenger, Economy'/>
                            </div>
                           
                            <div className="flight-search__buttons">
                                <div className="flight-search__promocode">
                                    <input type="text" className="flight-search__promocode-input" placeholder='+ Add Promo Code'/>
                                </div>

                                <button className="flight-search__form-btn">
                                    <img src={show} alt="" className="flight-search__form-btn-img" /> Show Filghts
                                </button>
                            </div>
                        </form>

                    </div>

                    <div className="search__info" data-search="stays"></div>
                </div>
            </div>
        </div>
     );
}
 
export default SearchForm;