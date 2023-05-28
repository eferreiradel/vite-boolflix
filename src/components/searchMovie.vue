<template>
  <div class="container-fluid">
    <div class="container d-flex gap-3">
      <input type="text" v-model="movieToSearch" class="w-100" />
      <button class="btn btn-dark" @click="searchMovie">search</button>
    </div>
    <div class="row justify-content-center p-5">
      <!-- <p>{{ apiMovieResponse }}</p> -->
      <div class="col-3" v-for="movie in apiMovieResponse">
        <img :src="movieCover + movie.poster_path" class="w-100" />
        <div class="container p-0">
          <h1>{{ movie.title }}</h1>
          <div class="container d-flex justify-content-between p-0">
            <h3>{{ movie.original_title }}</h3>
            <h3>{{ movie.original_language }}</h3>
          </div>
          <div class="conta">
            <span> VOTO </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "searchSection",
  data() {
    return {
      // API URL
      baseURL: "https://api.themoviedb.org/3/search/movie?",
      movieToSearch: "i-simpson",
      urlAppend: "&include_adult=false&language=en-US&page=1",

      // MOVIE IMAGES
      baseImageURL: "https://image.tmdb.org/t/p/",
      imageSize: "w500",

      apiMovieResponse: "",
    };
  },
  methods: {
    searchMovie() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTg0MTdjNjA3ZDlhNmNjNjRiZWFkZTZmNDY3MTMwZiIsInN1YiI6IjY0NzM0NzkzOTQwOGVjMDEwMDI1YWQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eeb4D6OuEwu46taBJrUPBsCRZu7eLyuXihBoLtUsgRQ",
        },
      };

      fetch(this.apiURL, options)
        .then((response) => response.json())
        .then((response) => (this.apiMovieResponse = response.results))
        .catch((err) => console.error(err));
    },
  },
  computed: {
    apiURL() {
      return `${this.baseURL}query=${this.movieToSearch}${this.urlAppend}`;
    },
    movieCover() {
      return `${this.baseImageURL}${this.imageSize}`;
    },
  },
  mounted() {
    // console.log(this.movieCover);
    // console.log(this.apiURL);
  },
};
</script>
<style></style>
