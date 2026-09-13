import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../redux/slices/moviesSlice";
import { removeFavorite } from "../redux/slices/favoritesSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteComponent = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((s) => s.favorites.items);

  const handleDelete = async () => {
    const existingFav = favorites.find((f) => f.movieId === movie.id);
    if (existingFav) {
      await dispatch(removeFavorite(existingFav.id));
    }
    await dispatch(deleteMovie(movie.id));
    toast.success(`"${movie.title}" has been deleted.`);
    navigate("/");
  };

  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered custom-modal">
        <div className="modal-content custom-modal">
          <div className="modal-body" style={{ color: "white" }}>
            <p>
              Are you sure you want to delete <strong>{movie.title}</strong>?
            </p>
            <p className="text-muted">This action cannot be undone.</p>
          </div>
          <div className="modal-footer">
            <button className="btn-glass" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              className="btn-glass destructive"
              onClick={handleDelete}
              data-bs-dismiss="modal"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComponent;