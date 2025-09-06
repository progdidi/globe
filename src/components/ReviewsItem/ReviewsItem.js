import './reviewsItem.scss';

//images
import example from './example.png';

const ReviewsItem = () => {
    return ( 
        <div className="review-item">
            <h5 className="review-item__title">“A real sense of community, nurtured”</h5>

            <p className="review-item__text">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>

            <a href="" className="review-item__link">View more</a>

            <img src={example} alt="" className="review-item__img" />
        </div>
     );
}
 
export default ReviewsItem;