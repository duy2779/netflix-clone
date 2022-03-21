import useStore from "../hooks/useStore"
import { getMovies } from "../features/searchSlice"
import { useEffect } from "react"
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import Footer from '../components/footer';
import MovieGrid from '../components/movies-grid'

const Search = () => {
    const { dispatch, state } = useStore()
    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const query = searchParams.get('q')
    const { moviesData } = state.search

    useEffect(() => {
        if (query) {
            dispatch(getMovies({ query, page: 1 }))
        } else {
            if (!location.state) {
                navigate("/")
            }
        }
    }, [dispatch, query, navigate, location.state])

    return (
        <>
            <div className="container container--lg" style={{ marginTop: "80px" }}>
                <MovieGrid movies={moviesData?.results} />
            </div>
            <Footer />
        </>
    )
}

export default Search