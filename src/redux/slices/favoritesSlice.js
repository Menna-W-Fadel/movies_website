import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFavorites, setFavorites, generateId } from "../../utils/storage";

export const fetchFavorites = createAsyncThunk("favorites/fetch", async () => {
  return getFavorites();
});

export const addFavorite = createAsyncThunk("favorites/add", async (movieId) => {
  const favorites = getFavorites();
  const newFav = { id: generateId(), movieId };
  favorites.push(newFav);
  setFavorites(favorites);
  return newFav;
});

export const removeFavorite = createAsyncThunk("favorites/remove", async (favId) => {
  const favorites = getFavorites();
  const filtered = favorites.filter((f) => f.id !== favId);
  setFavorites(filtered);
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
      });
  },
});

export default favoritesSlice.reducer;
