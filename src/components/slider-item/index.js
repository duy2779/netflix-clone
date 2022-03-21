import { IMAGE_BASE_URL } from '../../features/config'
import clsx from 'clsx'
import Button from '../button'
import useStore from '../../hooks/useStore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// scss
import './slider-item.scss'

const SliderItem = ({ movie, index }) => {
    const { state } = useStore()
    let location = useLocation();
    const [movieGenres, setMovieGenres] = useState([])
    useEffect(() => {
        const matchGenres = () => {
            const genres = state.genres.genres
            const movieGenres = genres.filter(item => movie.genre_ids.includes(item.id))
            if (movieGenres.length > 3) {
                setMovieGenres(movieGenres.slice(0, 3))
            }
            else {
                setMovieGenres(movieGenres)
            }
        }
        matchGenres()
        // eslint-disable-next-line
    }, [])



    return (
        <div className={clsx("slider-item")}>
            <div
                className="slider-item__img"
                style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}w1280${movie.backdrop_path})`
                }}
            >
                <p className="slider-item__title">{movie.title}</p>
            </div>
            <div className="slider-item__info">
                <div className="slider-item__control">
                    <Button circle >
                        <i className="fa-solid fa-play"></i>
                    </Button>
                    <Button circle transparent>
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                    <Button circle transparent>
                        <i className="fa-solid fa-thumbs-up"></i>
                    </Button>
                    <Button circle transparent>
                        <i className="fa-solid fa-thumbs-down"></i>
                    </Button>
                    <Button circle transparent link={"/browse/movie/" + movie.id} location={{ backgroundLocation: location }}>
                        <i className="fa-solid fa-angle-down"></i>
                    </Button>

                </div>
                <div className="slider-item__more-info">
                    <span className="slider-item__rating">
                        {movie.vote_average} Rating
                    </span>
                    <span className="slider-item__adult-type">
                        {movie.adult ? "18+" : "13+"}
                    </span>
                    <span className="slider-item__hd-badge">
                        HD
                    </span>
                </div>
                <div className="slider-item__genres">
                    {movieGenres.map(genre => (
                        <span key={genre.id} className="slider-item__genre">{genre.name}</span>
                    ))}
                </div>
            </div>
        </div >


    )
}

export default SliderItem