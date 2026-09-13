import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../redux/slices/moviesSlice";
import { toast } from "react-toastify";

const UpdateComponent = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movie = useSelector((s) => s.movies.moviesList.find((m) => m.id == movieId));

  const [updatedMovie, setUpdatedMovie] = useState({
    title: movie?.title || "",
    duration: movie?.duration || "",
    poster_path: movie?.poster_path || "",
    backdrop_path: movie?.backdrop_path || "",
    overview: movie?.overview || "",
    vote_average: movie?.vote_average || "",
    release_date: movie?.release_date || "",
    original_language: movie?.original_language || "",
  });

  if (!movie) return <div style={{ color: "white", padding: 40 }}>Movie not found.</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie((prev) => ({
      ...prev,
      [name]: name === "duration" || name === "vote_average" ? Number(value) : value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ ...movie, ...updatedMovie }));
    toast.success(`"${updatedMovie.title}" has been updated.`);
    navigate(`/movie/${movieId}`);
  };

  const poster = updatedMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500${updatedMovie.poster_path}`
    : "https://via.placeholder.com/300x450";

  const backdrop = updatedMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${updatedMovie.backdrop_path}`
    : "";

  return (
    <div className="edit-page animate-fade-in-up">
      <div className="edit-layout">
        {/* LEFT: FORM */}
        <div className="edit-form-section">
          <h1 className="heading-section">Edit Movie</h1>
          <div className="divider-emerald mt-2 mb-4"></div>

          <form onSubmit={handleUpdate} className="edit-form">
            <label className="edit-title">Title</label>
            <input
              type="text"
              name="title"
              value={updatedMovie.title}
              onChange={handleChange}
              className="input"
            />

            <div className="edit-row">
              <div>
                <label className="edit-title" style={{ marginRight: 10 }}>Release Date</label>
                <input
                  type="date"
                  name="release_date"
                  value={updatedMovie.release_date}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div>
                <label className="edit-title" style={{ marginRight: 10 }}>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={updatedMovie.duration}
                  onChange={handleChange}
                  placeholder="Duration (min)"
                  className="input"
                />
              </div>
            </div>

            <div className="edit-row">
              <div>
                <label className="edit-title" style={{ marginRight: 10 }}>Poster</label>
                <input
                  type="text"
                  name="poster_path"
                  value={updatedMovie.poster_path}
                  onChange={handleChange}
                  placeholder="Poster path (TMDB)"
                  className="input"
                />
              </div>
              <div>
                <label className="edit-title" style={{ marginRight: 10 }}>Backdrop</label>
                <input
                  type="text"
                  name="backdrop_path"
                  value={updatedMovie.backdrop_path}
                  onChange={handleChange}
                  placeholder="Backdrop path (TMDB)"
                  className="input"
                />
              </div>
            </div>

            <label className="edit-title">Overview</label>
            <textarea
              name="overview"
              value={updatedMovie.overview}
              onChange={handleChange}
              className="textarea"
            />

            <div className="form-actions">
              <button type="submit" className="btn-primary">Save Changes</button>
              <button type="button" className="btn-glass" onClick={() => navigate(-1)}>
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="edit-preview-section">
          <p className="label">Preview</p>
          <div
            className="preview-backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
          >
            <div className="preview-overlay"></div>
            <img src={poster} alt="poster" className="preview-poster" />
            <div className="preview-title">{updatedMovie.title}</div>
            <div className="preview-meta">
              Rating: {updatedMovie.vote_average} | {updatedMovie.release_date} |{" "}
              {(updatedMovie.original_language || "--").toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateComponent;