import useStore from '../hooks/useStore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// actions
import { getGenres } from '../features/genresSlice';
import { getMoviesByGenre } from '../features/movieByGenreSlice';
//components
import SelectProfile from '../components/profiles';
import ProfileLoading from '../components/profile-loading';
import HeaderWithNav from '../containers/header-with-nav';
import Footer from '../components/footer';

import MovieGrid from '../components/movies-grid'
import MoviesSkeleton from '../components/movies-skeleton'
//other


const BrowseGenre = () => {
    const { state, dispatch } = useStore()
    const { profile, genres, movieByGenre } = state
    const { profile: user } = profile
    const { genreId } = useParams()
    const [genreName, setGenreName] = useState()
    const [delayed, setDelayed] = useState(true);

    useEffect(() => {
        if (genres.genres.length > 0) {
            setGenreName(() => genres.genres.find(e => e.id === Number(genreId)).name)
            return
        }
        async function fetchData() {
            await dispatch(getGenres())
        }
        fetchData()
    }, [dispatch, genres.genres, genreId, genreName])

    useEffect(() => {
        if (genreName) {
            dispatch(getMoviesByGenre({ genreId, genreName, page: 1 }))
            dispatch(getMoviesByGenre({ genreId, genreName, page: 2 }))
        }
    }, [genreId, dispatch, genreName])

    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), 500);
        return () => clearTimeout(timeout);
    }, []);

    return !user.name ? (
        <>
            <SelectProfile />
        </>
    ) : (
        profile.loading ? <ProfileLoading picture={user.picture} /> : (
            <>
                {
                    delayed ?
                        <div className="container container--lg" style={{ marginTop: "80px" }}>
                            <MoviesSkeleton />
                        </div>
                        : (
                            <>
                                <div className="container container--lg" style={{ marginTop: "80px" }}>
                                    <MovieGrid movies={movieByGenre.movies[genreId]?.results} name={genreName} />
                                </div>
                                <Footer />
                            </>
                        )
                }

            </>
        )
    )
}

export default BrowseGenre
