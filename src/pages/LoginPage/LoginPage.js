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

                <p className="login-page__form-text">Don’t have an account? Sign up</p>


                <div className="login-page__social">
                  <p className="login-page__social-text">Or login with</p>
                  <SocialLogin/>
                </div>

                

              </div>

              <div className="login-page__media">
                <img src={log} alt="" className="login-page__media-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="signup-page">
          <div className="container">
            <div className="signup-page__inner">
              <div className="login-page__media">
                <img src={log} alt="" className="login-page__media-img" />
              </div>

              <div className="signup-page__info">
                <img src={logo} alt="" className="signup-page__logo" />

                <h3 className="signup-page__title">Sign up</h3>
                <p className="signup-page__text">Let’s get you all st up so you can access your personal account.</p>

                <form action="" className="signup-page__form">

                  <div className="signup-page__form-content">
                    <label htmlFor="" className="signup-page__form-label"> First Name
                      <input type="text" className="signup-page__form-input" placeholder=''/>
                    </label>

                    <label htmlFor="" className="signup-page__form-label"> Last Name
                      <input type="text" className="signup-page__form-input" placeholder=''/>
                    </label>

                    <label htmlFor="" className="signup-page__form-label"> Email
                      <input type="text" className="signup-page__form-input" placeholder='john.doe@gmail.com'/>
                    </label>

                    <label htmlFor="" className="signup-page__form-label"> Phone number
                      <input type="text" className="signup-page__form-input" />
                    </label>

                    <label htmlFor="" className="signup-page__form-label"> Password
                      <input type="password" className="signup-page__form-input" />
                    </label>

                    <label htmlFor="" className="signup-page__form-label"> Confirm Password
                      <input type="password" className="signup-page__form-input" />
                    </label>

                    <label htmlFor="" className="signup-page__form-label"> 
                      <input type="checkbox" className="signup-page__form-input" /> I agree to all the Terms and Privacy Policies
                    </label>
                  </div>
                  

                  <button className="signup-page__form-btn">Create account</button>
                </form>

                <p className="signup-page__form-text">Already have an account? Login</p>

                <div className="login-page__social">
                  <p className="login-page__social-text">Or login with</p>
                  <SocialLogin/>
                </div>
              </div>
            </div>
          </div>         
        </section>
        </>
      );
}
 
export default LoginPage;