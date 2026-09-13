import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies, setMovies, seedIfNeeded, generateId } from "../../utils/storage";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  await seedIfNeeded();
  return getMovies();
});

export const addMovie = createAsyncThunk("movies/add", async (movie) => {
  const movies = getMovies();
  const newMovie = { ...movie, id: generateId() };
  movies.push(newMovie);
  setMovies(movies);
  return newMovie;
});

export const updateMovie = createAsyncThunk("movies/update", async (movie) => {
  const movies = getMovies();
  const idx = movies.findIndex((m) => m.id === movie.id);
  if (idx === -1) throw new Error("Movie not found");
  movies[idx] = movie;
  setMovies(movies);
  return movie;
});

export const deleteMovie = createAsyncThunk("movies/delete", async (id) => {
  const movies = getMovies();
  const filtered = movies.filter((m) => m.id !== id);
  setMovies(filtered);
  return id;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesList: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesList = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.moviesList.push(action.payload);
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const idx = state.moviesList.findIndex(
          (m) => m.id === action.payload.id
        );
        if (idx !== -1) state.moviesList[idx] = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.moviesList = state.moviesList.filter(
          (m) => m.id !== action.payload
        );
      });
  },
});

export default moviesSlice.reducer;
