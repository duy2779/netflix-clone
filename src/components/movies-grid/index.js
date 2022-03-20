import Grid from '../grid';
import SliderItem from '../slider-item';
import "./movies-grid.scss"

const MoviesGrid = ({ movies, name }) => {
    return (
        <div className="movie-grid">
            <h1 className="movie-grid__title">{name && name}</h1>
            {
                movies && (
                    <Grid>
                        {
                            movies.slice(0, -4).map(movie => (
                                <SliderItem movie={movie} key={movie.id} />
                            ))
                        }
                    </Grid>
                )
            }
        </div>
    )
}

export default MoviesGrid