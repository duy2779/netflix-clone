import axiosClient from "./axiosClient";

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

const tmdbApi = {
    search: (params) => {
        const url = 'search/movie'
        return axiosClient.get(url, params)
    },
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, params)
    },
    getGenres: () => {
        const url = 'genre/movie/list'
        return axiosClient.get(url, { params: {} })
    },
    getMoviesByGenre: (params) => {
        const url = 'discover/movie'
        return axiosClient.get(url, params)
    },
    getCredits: (id) => {
        const url = 'movie/' + id + "/credits"
        return axiosClient.get(url, { params: {} })
    },
    getMovieDetail: (id) => {
        const url = 'movie/' + id
        return axiosClient.get(url, { params: {} })
    }
}

export default tmdbApi