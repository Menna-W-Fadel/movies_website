import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const BASE_URL = `${API_URL}/results`;

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error(`Failed to fetch movies (${res.status})`);
  return await res.json();
});

export const addMovie = createAsyncThunk("movies/add", async (movie) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Failed to add movie (${res.status})`);
  return await res.json();
});

export const updateMovie = createAsyncThunk("movies/update", async (movie) => {
  const res = await fetch(`${BASE_URL}/${movie.id}`, {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Failed to update movie (${res.status})`);
  return await res.json();
});

export const deleteMovie = createAsyncThunk("movies/delete", async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok && res.status !== 404) throw new Error(`Failed to delete movie (${res.status})`);
  return id;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesList: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => { state.loading = true; state.error = null; })
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
        const idx = state.moviesList.findIndex((m) => m.id === action.payload.id);
        if (idx !== -1) state.moviesList[idx] = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.moviesList = state.moviesList.filter((m) => m.id !== action.payload);
      });
  },
});

export default moviesSlice.reducer;