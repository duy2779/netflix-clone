const Jumbotron = ({ jumbo }) => {
    return (
        <div className="jumbotron">
            <div className={`jumbotron__container container ${jumbo.id % 2 === 0 ? 'jumbotron__container--reverse' : ''}`}>
                <div className="jumbotron__text">
                    <h1 className="jumbotron__title">{jumbo.title}</h1>
                    <h2 className="jumbotron__subtitle">{jumbo.subTitle}</h2>
                </div>
                <img src={jumbo.image} alt={jumbo.alt} className="jumbotron__img" />
            </div>
        </div >
    )
}

export default Jumbotron
