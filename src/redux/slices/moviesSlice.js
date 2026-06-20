import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000/results";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
});

export const addMovie = createAsyncThunk("movies/add", async (movie) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
});

export const updateMovie = createAsyncThunk("movies/update", async (movie) => {
  const res = await fetch(`${BASE_URL}/${movie.id}`, {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
});

export const deleteMovie = createAsyncThunk("movies/delete", async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return id;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesList: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => { state.loading = true; })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesList = action.payload;
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