import './newsletterSection.scss';

//images
import mailbox from './mailbox.svg';

const NewsletterSection = () => {
    return ( 
        <section className="newsletter">
            <div className="container">
                <div className="newsletter__inner">
                    <div className="newsletter-info">
                        <h3 className="newsletter__title">Subscribe Newsletter</h3>
                        <h5 className="newsletter__subtitle">The Travel</h5>
                        <p className="newsletter__text">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                        <form action="" className="newsletter-form">
                            <input type="text" className="newsletter-form__input" placeholder='Your email address'/>
                            <button className="newsletter-form__btn">Subscribe</button>
                        </form>
                    </div>

                    <img src={mailbox} alt="" className="newsletter__img" />
                </div>
            </div>
        </section>
     );
}
 
export default NewsletterSection;