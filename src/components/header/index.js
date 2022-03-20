import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import useStore from '../../hooks/useStore';
//styles
import './styles/header.scss';
//data
import usersData from '../../fixtures/users.json';
import navbarData from '../../fixtures/header-navbar.json';
//actions
import { selectProfile } from '../../features/profileSlice';
import { setPrevRoute } from '../../features/searchSlice'

const Header = ({ children, fixed = false }) => {
    const [hasBackgroundColor, setHasBackgroundColor] = useState(false);

    const handleHeaderScroll = () => {
        setHasBackgroundColor(window.pageYOffset > 73)
    }

    useEffect(() => {
        if (fixed) {
            if (typeof window !== 'undefined') {
                window.addEventListener("scroll", handleHeaderScroll)
            }
        }

        return () => {
            window.removeEventListener("scroll", handleHeaderScroll)
        }
    }, [fixed])

    return (
        <header className={clsx("header", {
            "header--fixed": fixed,
            "header--with-bg": hasBackgroundColor
        })}>
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

Header.Nav = function HeaderNav() {
    return (
        <nav className="header__nav">
            <p className="header__nav-title">Browse</p>
            <ul className="header__nav-list">
                {navbarData.map(menu => (
                    <li key={menu.id} className="header__nav-item">
                        <NavLink
                            to={menu.link}
                            className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'}
                        >
                            {menu.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
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
    const [searchInput, setSearchInput] = useState("");
    const { dispatch, state } = useStore()
    const { prevRoute } = state.search
    const searchInputRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== "/search") {
            dispatch(setPrevRoute(location.pathname));
        }
    }, [location.pathname, dispatch])

    const searchIconOnClick = () => {
        setActive(!active);
        searchInputRef.current.focus();
    }

    const handleSearchInputBlur = () => {
        setActive(false)
    }

    const handleSearhInputChange = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            navigate(prevRoute)
            return
        }
        navigate({ pathname: "/search", search: `?${createSearchParams({ q: e.target.value })}` })
    }

    return (
        <div className="header__search">
            <img
                src="/images/icons/search.png"
                alt="search"
                className={`header__search-icon ${active ? 'active' : null}`}
                onClick={searchIconOnClick}
            />
            <input
                value={searchInput}
                type="text"
                placeholder="Titles, people, genres"
                className={`header__search-input ${active ? 'active' : null}`}
                ref={searchInputRef}
                onChange={handleSearhInputChange}
                onBlur={handleSearchInputBlur}
            />
        </div>
    )
}