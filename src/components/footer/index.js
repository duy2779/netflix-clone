import { Link } from 'react-router-dom';
//styles
import './styles/footer.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__container container">
                <p className="footer__title">
                    <Link to="#" className="footer__link">Questions? Contact us.</Link>
                </p>

                <div className="footer__row">
                    <ul className="footer__column">
                        <li className="footer__item">
                            <Link to="#" className="footer__link">FAQ</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Investor Relations</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Privacy</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Speed Test</Link>
                        </li>
                    </ul>

                    <ul className="footer__column">
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Help Center</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Jobs</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Cookie Preferences</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Legal Notices</Link>
                        </li>
                    </ul>

                    <ul className="footer__column">
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Account</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Ways to Watch</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Corporate Information</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Only on Netflix</Link>
                        </li>
                    </ul>

                    <ul className="footer__column">
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Media Center</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Terms of Use</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="#" className="footer__link">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <p className="footer__copyright">ReactJs With &hearts;</p>
            </div>
        </section>
    )
}

export default Footer
