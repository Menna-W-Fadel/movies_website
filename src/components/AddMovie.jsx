import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/slices/moviesSlice";

const AddMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newMovie, setNewMovie] = useState({
    title: "", duration: "", poster_path: "", backdrop_path: "",
    overview: "", vote_average: "", release_date: "", original_language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: name === "duration" || name === "vote_average" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie({ ...newMovie, genre_ids: [] }));
    navigate("/");
  };

  const poster = newMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500${newMovie.poster_path}`
    : "https://via.placeholder.com/300x450";

  const backdrop = newMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${newMovie.backdrop_path}`
    : "";

  return (
    <div className="edit-page">
      <div className="edit-layout">

        <div className="edit-form-section">
          <h1 className="heading-section">Add Movie</h1>
          <div className="divider-emerald mt-2 mb-4"></div>

          <form onSubmit={handleSubmit} className="edit-form">

            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleChange}
              placeholder="Title"
              className="input"
            />

            <input
              type="text"
              name="duration"
              value={newMovie.duration}
              onChange={handleChange}
              placeholder="Duration (min)"
              className="input"
            />

            <input
              type="text"
              step="0.1"
              name="vote_average"
              value={newMovie.vote_average}
              onChange={handleChange}
              placeholder="Rating (0-10)"
              className="input"
            />

            <input
              type="date"
              name="release_date"
              value={newMovie.release_date}
              onChange={handleChange}
              className="input"
            />

            <input
              type="text"
              name="original_language"
              value={newMovie.original_language}
              onChange={handleChange}
              placeholder="Language (e.g. en, fr)"
              className="input"
            />

            <input
              type="text"
              name="poster_path"
              value={newMovie.poster_path}
              onChange={handleChange}
              placeholder="Poster path (TMDB)"
              className="input"
            />

            <input
              type="text"
              name="backdrop_path"
              value={newMovie.backdrop_path}
              onChange={handleChange}
              placeholder="Backdrop path (TMDB)"
              className="input"
            />

            <textarea
              name="overview"
              value={newMovie.overview}
              onChange={handleChange}
              placeholder="Overview"
              className="textarea"
            />

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Add Movie
              </button>

              <button
                type="button"
                className="btn-glass"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>

          </form>
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="edit-preview-section">
          <p className="label">Preview</p>

          <div
            className="preview-backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
          >
            <div className="preview-overlay"></div>

            <img src={poster} alt="poster" className="preview-poster" />

            <div className="preview-title">
              {newMovie.title || "Movie Title"}
            </div>

            <div className="preview-meta">
              Rating: {newMovie.vote_average || "0.0"} |{" "}
              {newMovie.release_date || "----"} |{" "}
              {(newMovie.original_language || "--").toUpperCase()}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddMovie;