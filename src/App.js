import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieModal from './components/movie-modal'
import HeaderWithNav from './containers/header-with-nav';
import Search from './pages/search';
//pages
const Home = lazy(() => import('./pages/home'));
const Signin = lazy(() => import('./pages/signin'));
const Signup = lazy(() => import('./pages/signup'));
const Browse = lazy(() => import('./pages/browse'));
const BrowseGenre = lazy(() => import('./pages/browseGenre'));
// const Movie = lazy(() => import('./pages/movie'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
  const location = useLocation();
  const pathname = location.pathname

  let state = location.state

  return (
    <Suspense fallback={<div></div>}>
      {(pathname.split("/").includes("browse") || pathname.split("/").includes("search")) && <HeaderWithNav />}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse" element={<Browse />} />
        {/* <Route path="/browse/movie/:movieId" element={<Movie />} /> */}
        <Route path="/browse/movie/:movieId" element={<MovieModal />} />
        <Route path="/browse/genre/:genreId" element={<BrowseGenre />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/browse/movie/:movieId" element={<MovieModal />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
