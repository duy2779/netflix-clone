import Button from '../button'
// scss
import './movie-info-layer.scss';

const MovieInfoLayer = ({ title, desc, movieId }) => {


    return (
        <div className="hero__movie-info-layer">
            <h1 className="hero__movie-title">{title}</h1>
            <h3 className="hero__movie-desc">{desc}</h3>
            <div className="hero__movie-control">
                <Button name="Play">
                    <i className="fa-solid fa-play"></i>
                </Button>
                <Button grayTransparent name="More Info" >
                    <i className="fa-solid fa-circle-info"></i>
                </Button>
            </div>
        </div>
    )
}

export default MovieInfoLayer