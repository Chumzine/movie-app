import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../features/redux/slices/moviesSlice';

export const Likes = () => { 
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.data);
    const status = useSelector((state) => state.movies.status);
    const error = useSelector((state) => state.movies.error);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchMovies());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <>
        <div>
            <h3>YOU MAY LIKE THIS</h3>
            <div></div>
            <span>See More</span>
        </div>
        <div>
            {movies?.map((movie) => (
                <div key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} /> 
                    <h4>{movie.Title}</h4>
                    <div>
                        <p>{movie.Year}</p>
                        <span><img src="" alt="" />104m</span>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
