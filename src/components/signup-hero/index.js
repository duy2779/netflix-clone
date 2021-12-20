import { Link } from 'react-router-dom';

//styles
import './styles/signup-hero.scss';

const SignupHero = () => {
    return (
        <div className="signup-hero">
            <div className="signup-hero__container">
                <div className="signup-hero__content">
                    <form className="signup-hero__form">
                        <h1 className="signup-hero__title">Sign Up</h1>
                        <div className="signup-hero__field">
                            <input id="first_name" name="first_name" type="text" className="signup-hero__input" placeholder=" " />
                            <label htmlFor="first_name" className="signup-hero__label">First name</label>
                        </div>
                        <div className="signup-hero__field">
                            <input id="email" name="email" type="text" className="signup-hero__input" placeholder=" " />
                            <label htmlFor="email" className="signup-hero__label">Email</label>
                        </div>
                        <div className="signup-hero__field">
                            <input id="password" name="password" type="password" className="signup-hero__input" placeholder=" " />
                            <label htmlFor="password" className="signup-hero__label">Password</label>
                        </div>

                        <button className="signup-hero__btn">Sign Up</button>

                        <div className="signin-hero__text">
                            <span>Have an account? </span>
                            <Link to="/signin">Sign in now</Link>
                        </div>
                        <p className="signin-hero__smalltext">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                    </form>
                </div>
                <img src="/images/misc/home-bg.jpg" alt="" className="signup-hero__bg" />
            </div>

        </div>
    )
}

export default SignupHero

