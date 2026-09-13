import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/moviesSlice";
import { fetchFavorites } from "../redux/slices/favoritesSlice";
import MovieCard from "../components/MovieCard";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const movies = useSelector((s) => s.movies.moviesList);

  useEffect(() => {
    if (movies.length === 0) dispatch(fetchMovies());
    if (favorites.length === 0) dispatch(fetchFavorites());
  }, []);

  const favoriteMovies = favorites
    .map((f) => movies.find((m) => m.id === f.movieId))
    .filter(Boolean);

  return (
    <div className="animate-fade-in-up" style={{ padding: "40px 20px" }}>
      <div className="label">Your</div>
      <div className="heading-section" style={{ fontSize: 50 }}>Favorites</div>
      <div className="movie-list">
        {favoriteMovies.length === 0
          ? <p className="text-muted">No favorites yet.</p>
          : favoriteMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  );
};

export default FavoritePage;
