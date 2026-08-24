import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const BASE_URL = `${API_URL}/favorites`;

export const fetchFavorites = createAsyncThunk("favorites/fetch", async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error(`Failed to fetch favorites (${res.status})`);
  return await res.json();
});

export const addFavorite = createAsyncThunk("favorites/add", async (movieId) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ movieId }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Failed to add favorite (${res.status})`);
  return await res.json();
});

export const removeFavorite = createAsyncThunk("favorites/remove", async (favId) => {
  const res = await fetch(`${BASE_URL}/${favId}`, { method: "DELETE" });
  if (!res.ok && res.status !== 404) throw new Error(`Failed to remove favorite (${res.status})`);
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