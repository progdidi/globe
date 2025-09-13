import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import ReviewsItem from '../../components/ReviewsItem/ReviewsItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchItem from '../../components/SearchItem/SearchItem';
import './mainPage.scss';

const MainPage = () => {
    return ( 
        <>

            <section className="promo">
                <div className="container">
                    <div className="promo__inner">
                        <h2 className="promo__subtitle">Helping Others</h2>
                        <h1 className="promo__title">Live & Travel</h1>
                        <p className="promo__text">Special offers to suit your plan</p>
                    </div>
                </div>
            </section>
            
            <SearchForm/>

            <section className="places">
                <div className="container">
                    <div className="places__inner">
                        <h2 className="places__title section-title">Plan your perfect trip</h2>

                        <p className="places__text">Search Flights & Places Hire to our most popular destinations</p>

                        <a href="" className="places__link">See more places</a>

                        <div className="places__items">
                            <PlaceItem/>
                            <PlaceItem/>
                            <PlaceItem/>
                            <PlaceItem/>
                            <PlaceItem/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="search">
                <div className="container">
                    <div className="search__inner">
                        <SearchItem/>

                        <SearchItem/>
                    </div>
                </div>
            </section>



            <ReviewsItem/>

            <NewsletterSection/>
        </>
     );
}
 
export default MainPage;