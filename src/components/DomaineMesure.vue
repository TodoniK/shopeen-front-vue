<template>
  <div id="section" class="container">
    <div class="row">
      <div class="col-md-8">
        <h3>Etape {{ etape }}/{{ TAB_QUIZ[TAB_QUIZ.length - 1].etape }} - {{ section }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { TAB_QUIZ } from "@/referentiel/QuestionList";

export default {
  computed: {
    TAB_QUIZ() {
      return TAB_QUIZ
    }
  },
  setup() {
    const store = useStore();
    const etape = ref(0);
    const section = ref("");

    const majAffichage = () => {
      store.state.domaineMesure.majEtapeEtSection(TAB_QUIZ, store.state.quizIndex)
      etape.value = store.state.domaineMesure.etape;
      section.value = store.state.domaineMesure.section;
    };

    onMounted(() => {
      majAffichage();
    });

    watch(() => store.state.quizIndex, () => {
      majAffichage();
    });

    return {
      etape,
      section,
    };
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>