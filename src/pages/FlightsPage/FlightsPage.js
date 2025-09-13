import FlightsItem from '../../components/FlightsItem/FlightsItem';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import SearchForm from '../../components/SearchForm/SearchForm';
import './flightPage.scss';

//images
import map from './map.png';
import promoFl from './promoFl.png';

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

          <section className="promo-flight">
            <div className="container">
                <h3 className="section-title promo-flight__title">Fall into travel</h3>
                <p className="promo-flight__text">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
                <a href="" className="promo-flight__link section-link">See All</a>

                <div className="promo-flight__inner">
                    <div className="promo-flight__info">
                        <h3 className="promo-flight__info-title">Backpacking Sri Lanka</h3>
                        <p className="promo-flight__info-price">from $700</p>
                        <p className="promo-flight__info-text">Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                        <button className="promo-flight__info-btn">Book Flight</button>
                    </div>

                    <div className="promo-flight__gallery">
                        <img src={promoFl} alt="" className="promo-flight__gallery-img" />
                        <img src={promoFl} alt="" className="promo-flight__gallery-img" />
                        <img src={promoFl} alt="" className="promo-flight__gallery-img" />
                        <img src={promoFl} alt="" className="promo-flight__gallery-img" />
                    </div>
                </div>
            </div>
          </section>

          
          <NewsletterSection/>

        </>
     );
}
 
export default FlightsPage;