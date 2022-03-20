import useStore from '../hooks/useStore';
import { useEffect, useState } from 'react'
// actions
import { getPopularMovies, resetStatus as resetPopularStatus } from '../features/moviePopularSlice';
import { getUpComingMovies, resetStatus as resetUpComingStatus } from '../features/movieUpComingSlice';
import { getTopRatedMovies, resetStatus as resetTopRatedStatus } from '../features/movieTopRatedSlice';
import { getGenres, resetStatus as resetGenresStatus } from '../features/genresSlice';
import { getMoviesByGenre } from '../features/movieByGenreSlice';
//components
import SelectProfile from '../components/profiles';
import ProfileLoading from '../components/profile-loading';
import Footer from '../components/footer';
import Slider from '../components/slider';
// container
import BrowseHero from '../containers/browse-hero';
import MoviesSkeleton from '../components/movies-skeleton'
//other


const Browse = () => {
    const { state, dispatch } = useStore()
    const { profile, moviePopular, movieUpComing, movieTopRated, genres, movieByGenre } = state
    const { profile: user } = profile
    const [delayed, setDelayed] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await dispatch(getGenres())
            await dispatch(resetGenresStatus())

            await dispatch(getPopularMovies())
            await dispatch(resetPopularStatus())

            await dispatch(getUpComingMovies())
            await dispatch(resetUpComingStatus())

            await dispatch(getTopRatedMovies())
            await dispatch(resetTopRatedStatus())

        }
        fetchData()
    }, [dispatch])

    useEffect(() => {
        async function fetchData() {
            for (const genre of genres.genres.slice(0, 5)) {
                await dispatch(getMoviesByGenre({ genreId: genre.id, genreName: genre.name }))
            }
        }
        fetchData()

    }, [genres.genres, dispatch])

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
                                <BrowseHero movie={moviePopular.movies[0]} />
                                <div className="container container--lg">
                                    <Slider movies={moviePopular.movies.slice(1, -1)} title="Trending Now" />
                                    <Slider movies={movieUpComing.movies.slice(0, -2)} title="Up Coming" />
                                    <Slider movies={movieTopRated.movies.slice(0, -2)} title="Top Rated" />
                                    {
                                        Object.keys(movieByGenre.movies).map((item, index) => (
                                            <Slider
                                                key={index} genreId={item}
                                                movies={movieByGenre.movies[item].results.slice(0, -2)}
                                                title={movieByGenre.movies[item].name}
                                            />
                                        ))
                                    }
                                </div>
                                <Footer />
                            </>
                        )
                }
            </>
        )
    )
}

export default Browse
