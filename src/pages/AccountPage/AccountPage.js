import HistoryItem from './HistoryItem/HistoryItem';
import './accountPage.scss';

//images
import cover from './cover.png';
import user from './user.png';

const AccountPage = () => {
    return ( 
        <>
        <section className="account-page">
            <div className="container">
                <div className="account-page__header">
                    <img src={cover} alt="" className="account-page__header-cover" />

                    <div className="account-page__user">
                        <img src={user} alt="" className="account-page__user-img" />
                        <p className="account-page__user-name">John Doe.</p>
                        <p className="account-page__user-mail">john.doe@gmail.com</p>
                    </div>
                </div>

                <div className="account-page__info">
                    <div className="account-page__tabs">
                        <button className="account-page__tab">Account</button>
                        <button className="account-page__tab">History</button>
                        <button className="account-page__tab">Payment methods</button>
                    </div>

                    <div className="account-page__content">
                        <div className="account-page__content-item" data-account="account">

                            <h3 className="account-page__content-title">Account</h3>

                            <div className="user-data">
                                <div className="user-data__item">
                                    <div>
                                        <h6 className="user-data__item-title">Name</h6>
                                        <p className="user-data__item-text">John Doe</p>
                                    </div>
                                    
                                    <button className="user-data__item-btn">Change</button>
                                </div>
                                <div className="user-data__item">
                                    <div>
                                    <h6 className="user-data__item-title">Email</h6>
                                    <p className="user-data__item-text">john.doe@gmail.com</p>
                                    </div>
                                    
                                    <button className="user-data__item-btn">Change</button>
                                </div>
                                <div className="user-data__item">
                                    <div>
                                    <h6 className="user-data__item-title">Password</h6>
                                    <p className="user-data__item-text"></p>
                                    </div>
                                    
                                    <button className="user-data__item-btn">Change</button>
                                </div>
                                <div className="user-data__item">
                                    <div>
                                    <h6 className="user-data__item-title">Phone number</h6>
                                    <p className="user-data__item-text">+1 000-000-0000</p>
                                    </div>
                                    
                                    <button className="user-data__item-btn">Change</button>
                                </div>
                                <div className="user-data__item">
                                    <div>
                                    <h6 className="user-data__item-title">Address</h6>
                                    <p className="user-data__item-text">St 32 main downtown, Los Angeles, California, USA</p>
                                    </div>
                                    
                                    <button className="user-data__item-btn">Change</button>
                                </div>
                                <div className="user-data__item">
                                    <div>
                                    <h6 className="user-data__item-title">Date of birth</h6>
                                    <p className="user-data__item-text">01-01-1992</p>
                                    </div>
                                    
                                    <button className="user-data__item-btn">Change</button>
                                </div>
                            </div>
                        </div>

                        

                        <div className="account-page__content-item" data-account="history">

                            <h3 className="account-page__content-title">Tickets/Bookings
Upcoming</h3>

                        <div className="user-history">
                            <div className="user-history__tabs">
                                <button className="user-history__tab">Flights</button>
                                <button className="user-history__tab">Stays</button>
                            </div>

                            <div className="user-history__data">
                                <HistoryItem/>
                            </div>
                        </div>


                        </div>
                        <div className="account-page__content-item" data-account="payment"></div>
                    </div>

                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;