<template>
  <section id="movies">
    <div class="contaier-fluid">
      <h3>Series</h3>
      <div class="container">
        <div class="row">
          <div class="col-3 p-0" v-for="serie in series">
            <div class="container-fluid card-container p-2">
              <img :src="posterImage + serie.poster_path" />
            </div>
            <div class="container">
              <div class="container p-0">
                <h3>{{ serie.name }}</h3>
              </div>
              <div class="container d-flex p-0">
                <div class="container w-100">
                  <h4>
                    {{ serie.original_name }}
                  </h4>
                </div>
                <div class="container">
                  <h4>
                    {{ serie.original_language }}
                  </h4>
                </div>
              </div>
              <div class="container p-2 text-center">
                <span v-for="vote in voteAverage(serie.vote_average)">
                  <i class="fas fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { endPointData } from "../stores/store";
export default {
  name: "seriesSection",

  methods: {
    voteAverage(vote) {
      return Math.floor(vote);
    },
  },
  computed: {
    posterImage() {
      return endPointData.baseImageURL;
    },
    series() {
      return endPointData.series;
    },
  },
};
</script>
<style></style>
