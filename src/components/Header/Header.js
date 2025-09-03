import './header.scss';

//images


import airplane from './images/airplane.svg';
import hotel from './images/hotel.svg';
import logo from './images/logo.svg';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__links">
                        <a href="" className="header-link">
                            <img src={airplane} alt="" className="header-link__img" /> Find Flight
                        </a>
                        <a href="" className="header-link">
                            <img src={hotel} alt="" className="header-link__img" /> Find Stays
                        </a>
                    </div>

                    <a href="" className="logo">
                        <img src={logo} alt=""  className="logo__img" />
                    </a>

                    <div className="header__buttons">
                        <button className="header-btn">Login</button>
                        <button className="header-btn active">Sign up</button>
                    </div>
                    
                </div>
            </div>
        </header>
     );
}
 
export default Header;