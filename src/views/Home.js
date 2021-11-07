import { React, useEffect, useState } from "react"
import MoviesService from "../api/MovieServices"
import Movie from "../components/Movie"

const Home = () => {

  const [moviesList, setMoviesList] = useState([])
  // Função Assíncrona para buscar dados na API MovieServices.js
  const getMovies = async () => {
    const { data: { results } } = await MoviesService.getMovies()
    console.log(results)
    setMoviesList(results)
  }
  // Hook para carregar a página quando na primeira vez ou sempre que o compoente é renderizado.
  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div className='container'>
      <div className='row gy-5'>
        {moviesList.map((movie) => (
          <div className='col-3'>
            <Movie />
          </div>
        ))}
      </div>

    </div>
  )
}
export default Home