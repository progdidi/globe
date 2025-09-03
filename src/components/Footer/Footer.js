import './footer.scss';
import SocialList from "../SocialList/SocialList";

//images
import logo from './images/logo.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer-info">
                        <img src={logo} alt="" className="footer-logo" />
                        <SocialList/>
                    </div>

                    <ul className="footer-list">
                        <h6 className="footer-list__title">Our Destinations</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Canada</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Alaksa</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">France</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Iceland</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h6 className="footer-list__title">Our Activities</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Northern Lights</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Cruising & sailing</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Multi-activities</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Kayaing</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h6 className="footer-list__title">Travel Blogs</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Bali Travel Guide</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Sri Lanks Travel Guide</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Peru Travel Guide</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Bali Travel Guide</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h6 className="footer-list__title">About Us</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Our Story</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Work with us</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h6 className="footer-list__title">Contact Us</h6>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Our Story</a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__item-link">Work with us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;