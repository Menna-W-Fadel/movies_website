import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/moviesSlice";
import { fetchFavorites } from "../redux/slices/favoritesSlice";
import Movies from "../components/Movies";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchFavorites());
  }, [dispatch]);

  return <Movies />;
};

export default HomePage;