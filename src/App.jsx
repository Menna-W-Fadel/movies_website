import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import MovieDetailsPage from "./pages/movie-details-page";
import AddMoviePage from "./pages/add-movie-page";
import EditPage from "./pages/edit-page";
import FavoritePage from "./pages/favorite-page";
import RegisterPage from "./pages/register-page";
import LoginPage from "./pages/login-page";
import NotFound from "./pages/notfound-page";
import Layout from "./pages/layout";
import "./styles/main_style.css";

function App() {

    const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, },

      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },

      {
        path: "movie/:movieId",
        element: <MovieDetailsPage />,
      },

      { path: "movies/add", element: <AddMoviePage /> },
      { path: "movies/edit/:movieId", element: <EditPage /> },

      { path: "favorites", element: <FavoritePage /> },

      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
