import './loginPage.scss';

//images
import log from './log.png';
import viewIcon from './view.svg';
import logo from './logo.svg';
import SocialLogin from './SocialLogin/SocialLogin';


const LoginPage = () => {
    return ( 
        <>
        <section className="login-page">
          <div className="container">
            <div className="login-page__innner">
              <div className="login-page__info">
                <img src={logo} alt="" className="login-page__logo" />

                <h3 className="login-page__title">Login</h3>
                <p className="login-page__text">Login to access your Golobe account</p>

                <form action="" className="login-page__form">

                  <label htmlFor="" className="login-page__form-label">Email
                    <input type="email" className="login-page__form-input" placeholder='john.doe@gmail.com'/>
                  </label>
                  
                  <label htmlFor="" className="login-page__form-label">Password
                    <input type="password" className="login-page__form-input" />
                  </label>

                  <label htmlFor="" className="login-page__form-label">Email
                    <input type="checkbox" className="login-page__form-input" />
                  </label>

                  <button className="login-page__form-btn">Login</button>
                </form>

                <SocialLogin/>

              </div>

              <div className="login-page__media">
                <img src={log} alt="" className="login-page__media-img" />
              </div>
            </div>
          </div>
        </section>
        </>
      );
}
 
export default LoginPage;