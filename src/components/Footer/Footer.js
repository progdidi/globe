import SocialList from "../SocialList/SocialList";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer-info">
                        <SocialList/>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;