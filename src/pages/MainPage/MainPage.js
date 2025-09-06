import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import ReviewsItem from '../../components/ReviewsItem/ReviewsItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import './mainPage.scss';

const MainPage = () => {
    return ( 
        <>

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

            <ReviewsItem/>

            <SearchForm/>
            <NewsletterSection/>
        </>
     );
}
 
export default MainPage;