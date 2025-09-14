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
                            <h3 className="section-title account-page__title">Account</h3>
                        </div>



                        <div className="account-page__content-item" data-account="history"></div>
                        <div className="account-page__content-item" data-account="payment"></div>
                    </div>

                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;