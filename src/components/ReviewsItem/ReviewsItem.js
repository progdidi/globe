import './reviewsItem.scss';

//images
import example from './example.png';
import star from './star.svg';

const ReviewsItem = () => {
    return ( 
        <div className="review-item">
            <h5 className="review-item__title">“A real sense of community, nurtured”</h5>

            <p className="review-item__text">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>

            <a href="" className="review-item__link">View more</a>

            <div className="review-item__rating">
                <img src={star} alt="" className="review-item__rating-img" />
                <img src={star} alt="" className="review-item__rating-img" />
                <img src={star} alt="" className="review-item__rating-img" />
                <img src={star} alt="" className="review-item__rating-img" />
                <img src={star} alt="" className="review-item__rating-img" />
            </div>

            <div className="review-item__author">
                <p className="review-item__author-name">Thomas</p>
                <p className="review-item__author-place">Weave Studios – Olympic</p>
                <a href="" className="review-item__author-link">Google</a>
            </div>

            <img src={example} alt="" className="review-item__img" />
        </div>
     );
}
 
export default ReviewsItem;