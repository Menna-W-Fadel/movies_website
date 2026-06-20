import {createContext , useState, useEffect} from 'react';
import Spinner from '../components/Spinner';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState(null);

  const server_url = "http://localhost:3000/results";

    // get data frm json server
    useEffect(() => {
            fetch(server_url)
                .then(response => response.json())
                .then(data => setMoviesList(data));
        }, []);

  //add new movie to json server
  const addMovie = async (newMovie) => {
      const response = await fetch(server_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });

      const data = await response.json();

      setMoviesList((movies) => [...movies, data]);
  };

  // update movie in json server
  const updateMovie = async (id, updatedMovie) => {
    
      const response = await fetch(`${server_url}/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMovie),
      });

      const data = await response.json();

      setMoviesList((movies) =>
        movies.map((movie) => (movie.id === id ? data : movie))
      );
    
  };
  //delete movie from json server
  const deleteMovie = async (id) => {
    
      await fetch(`${server_url}/${id}`, {
        method: "DELETE",
      });

      setMoviesList((movies) =>
        movies.filter((movie) => movie.id !== id)
      );
  };

  if (!moviesList) {
    return <Spinner />;
  }

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        addMovie,
        updateMovie,
        deleteMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;