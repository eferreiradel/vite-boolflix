<template>
  <header class="container header--nav d-flex p-3">
    <h2 class="logo">BoolFlix</h2>
    <div class="input--container">
      <button class="btn" @click="getDatafromEndpoint">
        <i class="fa fa-solid fa-search"></i>
      </button>
      <input
        type="text"
        class="form-control"
        v-model="searchInput"
        placeholder="cerca film o serie.."
      />
    </div>
  </header>
</template>
<script>
import { endPointData } from "../stores/store";
export default {
  name: "searchBar",
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    getDatafromEndpoint() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTg0MTdjNjA3ZDlhNmNjNjRiZWFkZTZmNDY3MTMwZiIsInN1YiI6IjY0NzM0NzkzOTQwOGVjMDEwMDI1YWQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eeb4D6OuEwu46taBJrUPBsCRZu7eLyuXihBoLtUsgRQ",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${this.searchInput}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          endPointData.movies = response.results;
        });

      fetch(
        `https://api.themoviedb.org/3/search/tv?query=${this.searchInput}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          endPointData.series = response.results;
        });
    },
  },
  computed: {
    seachResult() {
      return endPointData.searchResult;
    },
  },
  mounted() {},
};
</script>
<style></style>
