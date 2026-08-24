import  { useContext } from 'react';
import Spinner from './Spinner';
import MovieCard from './MovieCard';
import {useSelector}from "react-redux";

const Movies = () => {

   const {moviesList,loading,error} = useSelector((s) => s.movies);

    if (loading) {
        return <Spinner></Spinner>
    }
    if (error) {
        return <div style={{color:'red', textAlign:'center', padding:50}}>Failed to load movies: {error}</div>
    }
    return (
        <>
        <div className='label'>Lumiere</div>
        <div className='heading-section' style={{fontSize:50}}>Library</div>
        <div className="movie-list ">
            {moviesList.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
        </div>
        </>
    );
}

export default Movies;
