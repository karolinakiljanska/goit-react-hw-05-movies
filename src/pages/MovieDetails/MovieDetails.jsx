import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchMovieById } from 'Services/Api';
import {
  Container,
  GoBack,
  FilmCard,
  Title,
  FilmImg,
  OwerviewWrapper,
  LinkWrapper,
  Cast,
  Reviews,
} from './MovieDetails.styled';

const movieImgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies/:movieId');

  useEffect(() => {
    fetchMovieById(movieId).then(result => setMovie(result));
  });
  if (!movie) {
    return;
  }

  return (
    <Container>
      <GoBack>
        <Link
          style={{
            textDecoration: 'none',
            display: 'block',
            position: 'relative',
            padding: '6px',
          }}
          to={backLinkHref.current}
        >
          Go BACK
        </Link>
      </GoBack>
      <Title>{movie.title}</Title>
      <FilmCard>
        <FilmImg
          src={`${movieImgBaseUrl + movie.poster_path}`}
          alt={movie.title}
        />
        <OwerviewWrapper>
          <p>Overview</p>
          <p>{movie.overview}</p>
        </OwerviewWrapper>
      </FilmCard>

      <LinkWrapper>
        <Cast>
          <Link
            style={{
              textDecoration: 'none',
            }}
            to="cast"
            state={location.state}
          >
            Cast
          </Link>
        </Cast>
        <Reviews>
          <Link
            style={{
              textDecoration: 'none',
            }}
            to="reviews"
            state={location.state}
          >
            Reviews
          </Link>
        </Reviews>
      </LinkWrapper>
      <Outlet />
    </Container>
  );
};
export default MovieDetails;
