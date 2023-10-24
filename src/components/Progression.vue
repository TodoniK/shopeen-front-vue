<template>
  <div id="etape" class="col-md-6">
    <div class="progressbar">
      <progress :max="TAB_QUIZ.length - 1" :value="quizIndex"></progress>
      <div class="progressbar-label">{{ quizIndex }}/{{TAB_QUIZ.length - 1}}</div>
    </div>
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
    ...mapState(["quizIndex"]),
  },
};
</script>

<style scoped>
#etape {
  text-align: right;
}
</style>