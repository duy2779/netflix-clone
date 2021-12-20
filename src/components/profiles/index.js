import { useDispatch } from 'react-redux';
//components
import Header from '../header';
//styles
import './styles/profiles.scss';
//data
import usersData from '../../fixtures/users.json';
//actions
import { selectProfile } from '../../features/profileSlice';

const Profiles = () => {
    return (
        <>
            <Header>
                <Header.LogoSmall />
            </Header>
            <div className="profiles">
                <div className="profiles__container">
                    <h1 className="profiles__title">Who's watching?</h1>
                    <ul className="profiles__list">
                        {
                            usersData.map((user, index) => <Profile key={index} name={user.name} picture={user.picture} />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profiles

const Profile = ({ name, picture }) => {
    const dispatch = useDispatch();

    return (
        <li className="profile" onClick={() => dispatch(selectProfile({ name, picture }))}>
            <img src={`/images/users/${picture}.png`} alt="profile" className="profile__img" />
            <h3 className="profile__name">{name}</h3>
        </li>
    )
}