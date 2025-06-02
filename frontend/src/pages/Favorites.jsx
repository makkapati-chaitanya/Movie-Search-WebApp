import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContex"
import MovieCard from "../components/MovieCard"
function Favorites()
{
    const {favorites} = useMovieContext()
    if(favorites)
    {
        return  <div className="movies-grid">
        {favorites.map((movie) => <MovieCard movie={movie} key ={movie.id}/>)}
    </div>
    }
    return (<div className="favorites-empty">
        <h2>No Favorite Movies</h2>
    </div>)
}
export default Favorites
