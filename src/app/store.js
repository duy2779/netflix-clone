import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';
import moviePopularReducer from '../features/moviePopularSlice';
import movieUpComingReducer from '../features/movieUpComingSlice';
import movieTopRatedReducer from '../features/movieTopRatedSlice';
import genresReducer from '../features/genresSlice';
import movieByGenreReducer from '../features/movieByGenreSlice';
import movieByIdReducer from '../features/movieByIdSlice';
import searchReducer from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    moviePopular: moviePopularReducer,
    movieUpComing: movieUpComingReducer,
    movieTopRated: movieTopRatedReducer,
    genres: genresReducer,
    movieByGenre: movieByGenreReducer,
    movieById: movieByIdReducer,
    search: searchReducer
  },
});
