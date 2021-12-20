import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//pages
// const Home = lazy(() => import('./pages/home'));
const Signin = lazy(() => import('./pages/signin'));
const Signup = lazy(() => import('./pages/signup'));
const Browse = lazy(() => import('./pages/browse'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" >
            <Navigate to="/browse" />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
