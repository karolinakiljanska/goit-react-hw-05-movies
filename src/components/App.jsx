import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => {
    return { ...module, default: module.Cast };
  })
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => {
    return { ...module, default: module.Reviews };
  })
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" />
        <Route path="movies" element={<Movies />} />
        <Route path="*" />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="*" />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" />
        </Route>
      </Route>
    </Routes>
  );
};
