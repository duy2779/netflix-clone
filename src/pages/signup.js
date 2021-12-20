//components
import SignupHero from "../components/signup-hero";
import Footer from "../components/footer";
import Header from "../components/header";

const Signup = () => {
    return (
        <>
            <Header>
                <Header.Logo />
                <Header.Login />
            </Header>
            <SignupHero />
            <Footer />
        </>
    )
}

export default Signup