import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useStore from '../../hooks/useStore'
// components
import Button from '../button'
// actions
import { getMovieById, getCreditsByMovie, clearData, resetStatus } from '../../features/movieByIdSlice'
// scss
import './movie-modal.scss'
// other
import apiConfig from 'api/apiConfig'

const MovieModal = () => {
    let navigate = useNavigate();
    let { movieId } = useParams();
    const { state, dispatch } = useStore()
    const { movieById } = state
    const { movie, credits } = movieById

    useEffect(() => {
        async function fetchMovie() {
            await dispatch(getMovieById({ movieId }))
            await dispatch(getCreditsByMovie({ movieId }))
        }
        fetchMovie()

        return () => {
            dispatch(clearData())
        }
    }, [dispatch, movieId])

    useEffect(() => {
        if (movieById.error) {
            navigate("/not-found")
            dispatch(resetStatus())
        }
    }, [movieById, navigate, dispatch])

    const onDismiss = () => {
        navigate(-1)
    }

    return (Object.keys(movie).length !== 0 || Object.keys(credits) !== 0) && (
        <div className="modal">
            <div className="modal__overlay" onClick={onDismiss}>
            </div>
            <div className="modal__content">
                <div
                    className="modal__movie-hero"
                    style={{ backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})` }}
                >
                    <h2 className="modal__movie-title">{movie.title}</h2>
                </div>
                <div className="modal__movie-info">
                    <div className="modal__movie-info__left">
                        <div className="modal__movie-more-info">
                            <span className="modal__movie-rating">
                                {movie.vote_average} Rating
                            </span>
                            <span className="modal__movie-adult-type">
                                {movie.adult ? "18+" : "13+"}
                            </span>
                            <span className="modal__movie-hd-badge">
                                HD
                            </span>
                        </div>
                        <div className="modal__movie-control">
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
                        </div>
                        <p className="modal__movie-overview">{movie.overview}</p>
                    </div>
                    <div className="modal__movie-info__right">
                        <div className="modal__movie-casts">
                            <label>
                                {"Cast: "}
                                {
                                    credits.cast?.slice(0, 5).map(item => (
                                        <span key={item.id} className="cast-name">
                                            {item.name}
                                        </span>
                                    ))
                                }
                            </label>
                        </div>

                        <div className="modal__movie-genres">
                            <label>
                                {"Genres: "}
                                {
                                    movie.genres?.map(item => (
                                        <span key={item.id} className="cast-name">
                                            {item.name}
                                        </span>
                                    ))
                                }
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieModal