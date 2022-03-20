import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../features/config'
import Hero from '../../components/hero';
import MovieInfoLayer from '../../components/movie-info-layer'


const BrowseHero = ({ movie }) => {
    return (
        movie ? (
            <Hero fullHeight image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`} >
                <MovieInfoLayer title={movie.title} desc={movie.overview} movieId={movie.id} />
            </Hero>
        ) :
            (
                <Hero fullHeight />
            )

    )
}

export default BrowseHero