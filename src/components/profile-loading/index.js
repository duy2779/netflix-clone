import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//styles
import './styles/profile-loading.scss';
// actions
import { clearLoading } from '../../features/profileSlice';

const ProfileLoading = ({ picture }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(clearLoading());
        }, 1500)

        return () => clearTimeout(delay);
    }, [dispatch])

    return (
        <div className="spinner">
            <img className="profile-loading-img" src={`/images/users/${picture}.png`} alt="profile" />
        </div>
    )
}

export default ProfileLoading
