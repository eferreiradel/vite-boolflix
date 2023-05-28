<template>
  <h1>BoolFlix</h1>
  <search-section></search-section>
  <div></div>
</template>

<script>
import { movieList } from "./stores/movie-list";
import searchSection from "./components/searchMovie.vue";

export default {
  name: "App",
  data() {
    return {
      test: "dada",
    };
  },
  components: {
    searchSection,
  },
  methods: {},
  computed: {},
  mounted() {
    console.log(movieList.test);
  },
};
</script>

<style>
body {
  background-color: rgb(78, 78, 78);
}
* {
  border: 1px solid black;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
