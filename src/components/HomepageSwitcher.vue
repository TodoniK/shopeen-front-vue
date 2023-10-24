<template>
  <div id="quiz" class="pb-1 pt-3">
    <nav class="ob1-menu-page ob1-menu-page-fullscreen ob1-menu-page-icon">
      <ul class="nav o-nav-light">
        <li class="nav-item">
          <a href="#" class="nav-link" @click="displayQuiz">
            <i class="bi bi-node-plus-fill" style="font-size: 25px;"></i><br>Entrer une mesure
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="displayGraph">
            <i class="bi bi-bar-chart-line" style="font-size: 25px;"></i><br>Observer les mesures
          </a>
        </li>
      </ul>
    </nav>

    <div v-if="isQuizDisplayed">
      <Quiz></Quiz>
    </div>

    <div v-if="isGraphDisplayed">
      <AppHistoricalGraph></AppHistoricalGraph>
    </div>
  </div>
</template>

<script>
import Quiz from "./Quiz.vue";
import AppHistoricalGraph from "./AppHistoricalGraph.vue";

export default {
  components: {
    Quiz,
    AppHistoricalGraph,
  },
  data() {
    return {
      isQuizDisplayed: true,
      isGraphDisplayed: false,
    };
  },
  methods: {
    displayQuiz() {
      this.isQuizDisplayed = true;
      this.isGraphDisplayed = false;
    },
    displayGraph() {
      this.isQuizDisplayed = false;
      this.isGraphDisplayed = true;
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>