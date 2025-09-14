import './socialLogin.scss';

//images
import fb from './images/fb.svg';
import google from './images/google.svg';
import apple from './images/apple.svg';




const SocialLogin = () => {
    return ( 
        <div className="social-login">
            <button className="social-login__btn">
                <img src={fb} alt="" className="social-login__btn-img" />
            </button>
            
            <button className="social-login__btn">
                <img src={google} alt="" className="social-login__btn-img" />
            </button>
            
            <button className="social-login__btn">
                <img src={apple} alt="" className="social-login__btn-img" />
            </button>
        </div>
     );
}
 
export default SocialLogin;