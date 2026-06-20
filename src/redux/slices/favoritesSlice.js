import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000/favorites";

export const fetchFavorites = createAsyncThunk("favorites/fetch", async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
});

export const addFavorite = createAsyncThunk("favorites/add", async (movieId) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ movieId }),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
});

export const removeFavorite = createAsyncThunk("favorites/remove", async (favId) => {
  await fetch(`${BASE_URL}/${favId}`, { method: "DELETE" });
  return favId;
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = state.items.filter((f) => f.id !== action.payload);
      })
  },
});

export default favoritesSlice.reducer;