import { reactive } from "vue";
import axios from "axios";

export const movieList = reactive({
  apiEndPoint: "",
  movies: [],
});

getMovieListFromAPI();
function getMovieListFromAPI() {
  axios
    .get("https://api.themoviedb.org/3/search/movie")
    .then((response) => console.log(response));
}
