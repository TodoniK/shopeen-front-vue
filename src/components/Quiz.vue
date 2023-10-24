<template>
  <div id="quiz" class="pb-1 pt-3">
    <Titre :titre="'Mon questionnaire'"></Titre>

    <BilanMesure></BilanMesure>

    <div v-if="nomApp === ''" id="app-selection" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
      <ListeApp texteSelecteur="Veuillez sélectionner l'application dont vous souhaitez faire le bilan :"></ListeApp>
    </div>

    <div v-if="quizIndex !== TAB_QUIZ.length && nomApp !== ''" id="questionnaire" class="shadow-lg p-3 mb-3 bg-light rounded mx-2" style="display: block">
      <DomaineMesure></DomaineMesure>
      <Question></Question>
      <Response></Response>
      <Navigation></Navigation>
    </div>

    <div v-if="quizIndex === TAB_QUIZ.length" id="graphe-bilan" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: block">
      <GraphBilan></GraphBilan>
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
import Response from "./Response.vue";
import BilanMesure from "./BilanMesure.vue";
import DomaineMesure from "./DomaineMesure.vue";
import Navigation from "./Navigation.vue";
import GraphBilan from "./GraphBilan.vue";
import ListeApp from "./ListeApp.vue";
import Titre from "./Titre.vue";

import { mapState } from "vuex";
import { TAB_QUIZ } from "@/referentiel/QuestionList";

export default {
  components: {
    Question,
    Response,
    BilanMesure,
    DomaineMesure,
    Navigation,
    GraphBilan,
    ListeApp,
    Titre,
  },
  computed: {
    TAB_QUIZ() {
      return TAB_QUIZ
    },
    ...mapState(["nomApp", "quizIndex"]),
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>