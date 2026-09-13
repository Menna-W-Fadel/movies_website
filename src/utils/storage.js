const MOVIES_KEY = "movies_app_movies";
const FAVORITES_KEY = "movies_app_favorites";

export function getMovies() {
  const raw = localStorage.getItem(MOVIES_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function setMovies(movies) {
  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
}

export function getFavorites() {
  const raw = localStorage.getItem(FAVORITES_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function setFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export async function seedIfNeeded() {
  if (getMovies()) return;
  const res = await fetch("/api/db.json");
  if (!res.ok) throw new Error("Failed to load initial data");
  const data = await res.json();
  setMovies(data.results);
  setFavorites(data.favorites || []);
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}
