import FlightsItem from '../../components/FlightsItem/FlightsItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import './flightPage.scss';

//images
import map from './map.png';

const FlightsPage = () => {
    return ( 
        <> 
          <section className="flights-promo">
            <div className="container">
                <div className="flights-promo__inner">
                    <h2 className="flights-promo__title">Make your travel whishlist, we’ll do the rest</h2>
                    <p className="flights-promo__text">Special offers to suit your plan</p>
                </div>                
            </div>
          </section>

          <SearchForm/>

          <section className="flights-map">
            <div className="container">
                <h2 className="section-title flights-map__title">Let's go places together</h2>

                <p className="flights-map__text">Discover the latest offers and news and start planning your next trip with us.</p>

                <a href="" className="flights-map__link">See All</a>

                <img src={map} alt="" className="flights-map__img" />
            </div>
            
          </section>

          <section className="flights">
            <div className="container">
                <div className="flights__inner">
                    <FlightsItem/>
                </div>
            </div>
          </section>


        </>
     );
}
 
export default FlightsPage;