import { fetchTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MovieList/MovieList';
import { Titile, Container } from 'components/SharedLayout/SharedLayout.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingMovies().then(result => {
      setMovies(result.results);
    });
  }, []);
  return (
    <Container>
      <div state={{ from: location }}>
        <Titile>Trending today</Titile>
        <MoviesList movies={movies} />
      </div>
    </Container>
  );
};

export default Home;
