import useStore from '../hooks/useStore';
//components
import SelectProfile from '../components/profiles';
import ProfileLoading from '../components/profile-loading';
import HeaderWithNav from '../containers/header-with-nav';
//other


const PageWithHeader = ({ children }) => {
    const { state } = useStore()
    const { profile } = state
    const { profile: user } = profile

    return !user.name ? (
        <>
            <SelectProfile />
        </>
    ) : (
        profile.loading ? <ProfileLoading picture={user.picture} /> : (
            <>
                <HeaderWithNav />
                {
                    children
                }
            </>
        )
    )
}

export default PageWithHeader
