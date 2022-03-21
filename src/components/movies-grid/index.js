import Grid from '../grid';
import SliderItem from '../slider-item';
import "./movies-grid.scss"
import { useState, useEffect } from 'react';

const MoviesGrid = ({ movies, name }) => {
    const [newMovies, setNewMovies] = useState(null)

    useEffect(() => {
        setNewMovies(() => movies?.filter(m => m.backdrop_path !== null))
    }, [movies])

    return (
        <div className="movie-grid">
            {name && <h1 className="movie-grid__title">{name}</h1>}
            {
                newMovies && (
                    <Grid>
                        {
                            newMovies.map(movie => (
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