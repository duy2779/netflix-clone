//components
import HomeHero from '../components/home-hero'
import Footer from '../components/footer'
import Jumbotrons from '../components/jumbotrons'
import SubscribeSection from '../containers/subscribe-section'
import Header from '../components/header';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/browse")
    }, [navigate])

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
