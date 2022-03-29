import Hero from '../../components/hero';
import MovieInfoLayer from '../../components/movie-info-layer'
import apiConfig from 'api/apiConfig';


const BrowseHero = ({ movie }) => {
    return (
        movie ? (
            <Hero fullHeight image={apiConfig.originalImage(movie.backdrop_path)} >
                <MovieInfoLayer title={movie.title} desc={movie.overview} movieId={movie.id} />
            </Hero>
        ) :
            (
                <Hero fullHeight />
            )

    )
}

export default BrowseHero