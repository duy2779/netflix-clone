import Header from '../../components/header';


const HeaderWithNav = () => {
    return (
        <Header fixed>
            <Header.LogoSmall />
            <div
                className="header__nav-wrapper"
                style={{ marginLeft: '2rem' }}
            >
                <Header.Nav />
            </div>
            <Header.GroupRight>
                <Header.Search />
                <Header.Profile />
            </Header.GroupRight>
        </Header>
    )
}

export default HeaderWithNav