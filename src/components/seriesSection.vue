<template>
  <section id="movies">
    <div class="contaier-fluid">
      <div class="container p-0">
        <div class="container nav--logo p-0">
          <h3>Series</h3>
        </div>
        <div class="row">
          <div class="col-3 card--container p-2 mb-2" v-for="serie in series">
            <div class="container-fluid img--container p-0">
              <img :src="posterImage + serie.poster_path" />
            </div>
            <div class="container p-0">
              <div class="container card--footer m-0 p-3">
                <div class="container p-0">
                  <h5>{{ serie.name }}</h5>
                </div>
                <div class="container p-0">
                  <p>Titolo originale:{{ serie.original_title }}</p>
                  <div class="containesr">
                    <p>lingua originale: {{ serie.original_language }}</p>
                  </div>
                </div>
                <div class="container p-2">
                  <span v-for="vote in voteAverage(serie.vote_average)">
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
