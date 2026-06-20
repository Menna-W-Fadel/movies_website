import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Calendar, Globe, Pencil, Trash2 } from "lucide-react";
import { genreMap } from "../data/genre-ids";
import DeleteComponent from "./Delete-component.jsx";
import { useSelector } from "react-redux";
import Spinner from "./Spinner"
const DetailsComponent = () => {
  const { movieId } = useParams();
 
  const movie = useSelector((s) => s.movies.moviesList.find((m) => m.id == movieId));

  if (!movie) return <Spinner></Spinner>;

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : "";
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450";

  const getGenreNames = (ids) => ids.map((id) => genreMap[id] || "Unknown");

  return (
    <>
      <div className="details-page">
        <div className="details-backdrop" style={{ backgroundImage: `url(${backdrop})` }}>
          <div className="details-backdrop-overlay"></div>
        </div>
        <div className="details-content">
          <div className="details-layout">
            <div className="details-poster">
              <img src={poster} alt={movie.title} />
            </div>
            <div className="details-info">
              <div className="label">Featured Presentation</div>
              <h1 className="heading-hero">{movie.title}</h1>
              <div className="meta-row">
                <span className="glass-effect"><Star size={14} className="meta-icon" />{movie.vote_average?.toFixed(1)}</span>
                <span className="glass-effect"><Calendar size={14} className="meta-icon" />{movie.release_date}</span>
                <span className="glass-effect"><Globe size={14} className="meta-icon" />{movie.original_language?.toUpperCase()}</span>
              </div>
              <div className="label" style={{ color: "#a4bccd", fontSize: 12 }}>overview</div>
              <p className="overview">{movie.overview}</p>
              <div className="extra">
                <span>⏱ {movie.duration} min</span>
                <span>🎭 {getGenreNames(movie.genre_ids).join(", ")}</span>
              </div>
              <div className="actions">
                <button className="btn-glass destructive" data-bs-toggle="modal" data-bs-target="#deleteModal">
                  <Trash2 size={14} style={{ marginRight: 6 }} />Delete
                </button>
                <Link to={`/movies/edit/${movie.id}`}>
                  <button className="btn-glass"><Pencil size={14} style={{ marginRight: 6 }} />Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <DeleteComponent movie={movie} />
    </>
  );
};

export default DetailsComponent;