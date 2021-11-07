import axios from 'axios'
const API_KEY = 'aed5a578a1f7a0c4327e35346655021d'
const BASE_URL = 'https://api.themoviedb.org/3/'
const setFullUrl = (path) => { return `${BASE_URL}${path}?api_key=${API_KEY}` }

class MoviesService {

  static getMovies = () => {
    const fullUrl = setFullUrl('movie/popular')
    console.log(fullUrl)
    return axios(fullUrl)
  }
}



export default MoviesService