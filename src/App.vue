<template>
  <search-bar></search-bar>
  <section id="movies" class="">
    <div class="container-fluid">
      <div class="container">
        <h3>Movies</h3>
        <div class="row">
          <div class="col-3 card--container p-2 mb-2" v-for="movie in movies">
            <div class="container-fluid img--container p-0">
              <img :src="posterImage + movie.poster_path" />
            </div>
            <div class="container p-0">
              <div class="container card--footer m-0 p-3">
                <div class="container p-0">
                  <h5>{{ movie.title }}</h5>
                </div>
                <div class="container p-0">
                  <p>Titolo originale:{{ movie.original_title }}</p>
                  <div class="containesr">
                    <p>lingua originale: {{ movie.original_language }}</p>
                  </div>
                </div>
                <div class="container p-2">
                  <span v-for="vote in voteAverage(movie.vote_average)">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <series-setion></series-setion>
</template>

<script>
import searchBar from "./components/searchMovie.vue";
import seriesSetion from "./components/seriesSection.vue";
import { endPointData } from "./stores/store";
export default {
  name: "App",
  data() {
    return {
      cards: 5,
    };
  },
  methods: {
    voteAverage(vote) {
      return Math.floor(vote);
    },
  },
  computed: {
    posterImage() {
      return endPointData.baseImageURL;
    },
    movies() {
      return endPointData.movies;
    },
    series() {
      return endPointData.series;
    },
  },
  components: {
    searchBar,
    seriesSetion,
  },
  mounted() {},
};
</script>

<style></style>
