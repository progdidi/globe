import './socialList.scss';

//images
import fb from './images/fb.svg';
import tw from './images/tw.svg';
import youtube from './images/youtube.svg';
import inst from './images/inst.svg';


const SocialList = () => {
    return ( 
        <ul className="social-list">
            <li className="social-list__item">
                <a href="" className="social-list__item-link">
                    <img src={fb} alt="" className="social-list__item-img" />
                </a>
            </li>
            <li className="social-list__item">
                <a href="" className="social-list__item-link">
                    <img src={tw} alt="" className="social-list__item-img" />
                </a>
            </li>
            <li className="social-list__item">
                <a href="" className="social-list__item-link">
                    <img src={youtube} alt="" className="social-list__item-img" />
                </a>
            </li>
            <li className="social-list__item">
                <a href="" className="social-list__item-link">
                    <img src={inst} alt="" className="social-list__item-img" />
                </a>
            </li>
        </ul>
     );
}
 
export default SocialList;