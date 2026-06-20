import React from "react";
import { Link } from "react-router-dom";
import { Flame, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../redux/slices/favoritesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);

  const imgConstP = "https://image.tmdb.org/t/p/w500/";
  let imgPath = imgConstP + movie.poster_path;

  const existingFav = favorites.find(
    (f) => f.movieId === movie.id
  );

  const handleFavorite = (e) => {
    e.preventDefault(); 

    if (existingFav) {
      dispatch(removeFavorite(existingFav.id));
    } else {
      dispatch(addFavorite(movie.id));
    }
  };

  return (
    <div className="movie-card surface">
      <Link to={`/movie/${movie.id}`}>
        <img src={imgPath} alt={movie.title} />

        <div className="movie-overlay">
          <h3 className="card-title">
            {movie.title.length > 20
              ? movie.title.substring(0, 20) + "..."
              : movie.title}
          </h3>

          <div className="card-data">
            <span>{movie.year}</span>
            <span>
              <Flame color="#bdcfdb" size={18} />
              {movie.vote_count}
            </span>
          </div>
        </div>
      </Link>

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        <Heart
          size={25}
          color={existingFav ? "#22c08a" : "#aaa"}
          fill={existingFav ? "#22c08a" : "none"}
        />
      </button>
    </div>
  );
};

export default MovieCard;
