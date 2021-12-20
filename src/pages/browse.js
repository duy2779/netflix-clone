import { useSelector } from 'react-redux';
//components
import SelectProfile from '../components/profiles';
import ProfileLoading from '../components/profile-loading';
import Header from '../components/header';
import SigninHero from "../components/signin-hero";

const Browse = () => {
    const { profile, loading } = useSelector(state => state.profile)

    return !profile.name ? (
        <>
            <SelectProfile />
        </>
    ) : (
        loading ? <ProfileLoading picture={profile.picture} /> : (
            <>
                <Header>
                    <Header.LogoSmall />
                    <Header.GroupRight>
                        <Header.Search />
                        <Header.Profile />
                    </Header.GroupRight>
                </Header>

                <SigninHero />
            </>
        )
    )
}

export default Browse
