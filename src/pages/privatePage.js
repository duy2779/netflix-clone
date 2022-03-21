import useStore from '../hooks/useStore';
//components
import SelectProfile from '../components/profiles';
import ProfileLoading from '../components/profile-loading';
//other


const PrivatePage = ({ children }) => {
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
                {
                    children
                }
            </>
        )
    )
}

export default PrivatePage
