import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TrendingLogo from '../../../assets/icons/Trending.svg';
import fetchMovies from '../../../features/redux/actions/moviesAction';


export const Trending = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.data)
    const status = useSelector((state) => state.movies.status);
    const error = useSelector((state) => state.movies.error);
    useEffect(() => {
        if (!movies?.length) {
            dispatch(fetchMovies());
        }
    }, []);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <>
            <div>
                <img src={TrendingLogo} alt="Fire Logo for trending" />
                <h3>Trending</h3>
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