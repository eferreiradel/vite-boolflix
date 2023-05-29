import { reactive } from "vue";

export const endPointData = reactive({
  baseURL: "",
  baseSeriesURL: "https://api.themoviedb.org/3/search/tv",
  baseImageURL: "https://image.tmdb.org/t/p/w500",

  movies: [],
  series: [],
});
