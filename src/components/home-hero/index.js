//styles
import './styles/home-hero.scss';
//components
import SubscribeForm from '../subscribe-form';

const HomeHero = () => {
    return (
        <div className="home-hero">
            <div className="home-hero__container">
                <div className="home-hero__content container">
                    <div className="home-hero__text">
                        <h1 className="home-hero__title">Unlimited movies, TV shows, and more.</h1>
                        <h3 className="home-hero__subtitle">Watch anywhere. Cancel anytime.</h3>
                    </div>
                    <SubscribeForm />
                </div>
                <img src="/images/misc/home-bg.jpg" alt="" className="home-hero__bg" />
            </div>

        </div>
    )
}

export default HomeHero
