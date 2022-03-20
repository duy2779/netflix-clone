//components
import HomeHero from '../components/home-hero'
import Footer from '../components/footer'
import Jumbotrons from '../components/jumbotrons'
import SubscribeSection from '../containers/subscribe-section'
import Header from '../components/header';

const Home = () => {

    return (
        <>
            <Header>
                <Header.Logo />
                <Header.Login />
            </Header>
            <HomeHero />
            <Jumbotrons />
            <SubscribeSection />
            <Footer />
        </>
    )
}

export default Home
