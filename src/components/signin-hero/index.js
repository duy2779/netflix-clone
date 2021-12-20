import { Link } from 'react-router-dom';
//styles
import './styles/signin-hero.scss';

const SigninHero = () => {
    return (
        <div className="signin-hero">
            <div className="signin-hero__container">
                <div className="signin-hero__content">
                    <form className="signin-hero__form">
                        <h1 className="signin-hero__title">Sign In</h1>
                        <div className="signin-hero__field">
                            <input id="username" name="username" type="text" className="signin-hero__input" placeholder=" " />
                            <label htmlFor="username" className="signin-hero__label">Email or phone number</label>
                        </div>
                        <div className="signin-hero__field">
                            <input id="password" name="password" type="password" className="signin-hero__input" placeholder=" " />
                            <label htmlFor="password" className="signin-hero__label">Password</label>
                        </div>

                        <button className="signin-hero__btn">Sign In</button>

                        <div className="signin-hero__text">
                            <span>New to Netflix? </span>
                            <Link to="/signup">Sign up now</Link>
                        </div>
                        <p className="signin-hero__smalltext">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                    </form>
                </div>
                <img src="/images/misc/home-bg.jpg" alt="" className="signin-hero__bg" />
            </div>

        </div>
    )
}

export default SigninHero

