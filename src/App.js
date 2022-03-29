import { useSelector } from 'react-redux';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Search from 'pages/search';
import HeaderWithNav from 'containers/header-with-nav';
import MovieModal from 'components/movie-modal';
//pages
const Home = lazy(() => import('./pages/home'));
const Signin = lazy(() => import('./pages/signin'));
const Signup = lazy(() => import('./pages/signup'));
const Browse = lazy(() => import('./pages/browse'));
const BrowseGenre = lazy(() => import('./pages/browseGenre'));
const BrowseBySort = lazy(() => import('./pages/browseBySort'));
// const Movie = lazy(() => import('./pages/movie'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
  const location = useLocation();
  const pathname = location.pathname
  const { profile } = useSelector(state => state.profile)


  let state = location.state

  return (
    <Suspense fallback={<div></div>}>
      {(
        profile.name !== "" && (
          pathname.startsWith("/browse") ||
          pathname.startsWith("/search"))
      )
        && <HeaderWithNav />
      }
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:sortType" element={<BrowseBySort />} />
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
