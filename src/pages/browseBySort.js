import PrivatePage from './privatePage'
import useStore from '../hooks/useStore'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
// action
import { getPopularMovies } from '../features/moviePopularSlice';
import { getUpComingMovies } from '../features/movieUpComingSlice';
import { getTopRatedMovies } from '../features/movieTopRatedSlice';

import MovieGrid from '../components/movies-grid'
import MoviesSkeleton from '../components/movies-skeleton'
import Footer from '../components/footer';

const BrowseBySort = () => {
    const { state, dispatch } = useStore()
    const { sortType } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [title, setTitle] = useState(null)
    const [delayed, setDelayed] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), 500);
        return () => clearTimeout(timeout);
    }, [sortType]);

    useEffect(() => {
        async function fetchData() {
            if (location.state) {
                return
            }
            if (sortType === "top-rated") {
                await dispatch(getTopRatedMovies())
                setTitle("Top Rated")
            } else if (sortType === "up-coming") {
                await dispatch(getUpComingMovies())
                setTitle("Up Coming")
            } else if (sortType === "popular") {
                await dispatch(getPopularMovies())
                setTitle("Trending Now")
            } else {
                navigate("/not-found")
            }
        }
        fetchData()

    }, [dispatch, sortType, navigate, location.state])

    return (
        <PrivatePage>
            {
                delayed ?
                    <div className="container container--lg" style={{ marginTop: "80px" }}>
                        <MoviesSkeleton />
                    </div>
                    : (
                        <>
                            <div className="container container--lg" style={{ marginTop: "80px" }}>
                                <MovieGrid movies={
                                    sortType === "top-rated" ? state.movieTopRated.movies :
                                        sortType === "up-coming" ? state.movieUpComing.movies :
                                            sortType === "popular" ? state.moviePopular.movies :
                                                []
                                }
                                    name={title} />
                            </div>
                            <Footer />
                        </>
                    )
            }
        </PrivatePage>
    )
}

export default BrowseBySort