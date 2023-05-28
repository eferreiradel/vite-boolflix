<template>
  <div class="container-fluid">
    <div class="container d-flex gap-3">
      <input type="text" v-model="movieToSearch" class="w-100" />
      <button class="btn btn-dark" @click="searchMovie">search</button>
    </div>
    <div class="row justify-content-center">
      <!-- <p>{{ apiMovieResponse }}</p> -->
      <div class="col-5" v-for="movie in apiMovieResponse">
        <div class="container text-center">
          <h1>{{ movie.title }}</h1>
          <div class="container d-flex justify-content-between">
            <p>Titolo originale</p>
            <p>Lngua originale:</p>
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
  },
  mounted() {
    console.log(this.apiURL);
  },
};
</script>
<style></style>
