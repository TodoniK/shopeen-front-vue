<template>
  <div id="questions" class="container pb-1 pt-2">
    <h3 id="question">
      {{ question.getQuestionActuelle(TAB_QUIZ, quizIndex) }}
    </h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TAB_QUIZ } from "@/referentiel/QuestionList";

export default {
  computed: {
    TAB_QUIZ() {
      return TAB_QUIZ
    },
    ...mapState(["quizIndex", "question"]),
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>