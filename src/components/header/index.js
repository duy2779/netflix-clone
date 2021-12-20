import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles/header.scss';
//data
import usersData from '../../fixtures/users.json';
//actions
import { selectProfile } from '../../features/profileSlice';

const Header = ({ children }) => {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export default Header

Header.Logo = function HeaderLogo() {
    return (
        <Link to="/">
            <img src="/images/logo.svg" alt="netflix" className="header__logo" />
        </Link>
    )
}

Header.LogoSmall = function HeaderLogoSmall() {
    return (
        <Link to="/">
            <img src="/images/logo.svg" alt="netflix" className="header__logo--small" />
        </Link>
    )
}

Header.Login = function HeaderLogin() {
    return (
        <Link to="/signin" className="header__login-btn">
            <button className="header__btn">Sign In</button>
        </Link>
    )
}

Header.GroupRight = function HeaderGroupRight({ children }) {
    return (
        <div className="header__group-right">
            {children}
        </div>
    )
}

Header.Profile = function HeaderProfile() {
    const { profile } = useSelector(state => state.profile)
    const dispatch = useDispatch();
    return (
        <div className="header__profiles">
            <div className="header__selected-profile">
                <img src={`/images/users/${profile.picture}.png`} alt="profile" className="header__selected-profile-img" />
            </div>

            <ul className="header__profiles-list">
                {
                    usersData.map((user, index) => (
                        user.name !== profile.name &&
                        <li key={index} className="header__profiles-item" onClick={() => dispatch(selectProfile(user))}>
                            <img src={`/images/users/${user.picture}.png`} alt="profile" />
                            <span>{user.name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

Header.Search = function HeaderSearch() {
    const [active, setActive] = useState(false);
    const searchInput = useRef(null);

    const searchIconOnClick = () => {
        setActive(!active);
        searchInput.current.focus();
    }

    return (
        <div className="header__search">
            <img
                src="images/icons/search.png"
                alt="search"
                className={`header__search-icon ${active ? 'active' : null}`}
                onClick={searchIconOnClick}
            />
            <input
                type="text"
                placeholder="Titles, people, genres"
                className={`header__search-input ${active ? 'active' : null}`}
                ref={searchInput}
                onBlur={() => setActive(false)}
            />
        </div>
    )
}