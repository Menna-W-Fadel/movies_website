import  { useContext } from 'react';
import Spinner from './Spinner';
import MovieCard from './MovieCard';
import {useSelector}from "react-redux";

const Movies = () => {

   const {moviesList,loading} = useSelector((s) => s.movies);
  
    console.log(moviesList);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <>
        <div className='label'>Atelier</div>
        <div className='heading-section' style={{fontSize:50}}>Library</div>
        <div className="movie-list ">
            {moviesList.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
        </div>
        </>
    );
}

export default Movies;
