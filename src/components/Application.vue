<template>
  <div class="col-md-6">
    <h4 style="float: right">{{ storeNomApp }}</h4>
  </div>
</template>

<script>
import { computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { ApplicationRequest } from "@/API/ApplicationRequest";
import { TAB_QUIZ } from "@/referentiel/QuestionList";

export default {
  setup() {
    const store = useStore();
    const storeQuizIndex = computed(() => store.state.quizIndex);
    const storeNomApp = computed(() => store.state.nomApp);
    const storeBilan = computed(() => store.state.bilan);

    function sendAppHistoric() {
      if (isLast(storeQuizIndex.value)) {
        ApplicationRequest.postApplicationBilan(
            storeNomApp.value,
            storeBilan.value.bilanKwh,
            storeBilan.value.bilanEuro,
            storeBilan.value.bilanKgeqCO2
        );
      }
    }

    function isLast(currentIndex) {
      return currentIndex === TAB_QUIZ.length;
    }

    onMounted(() => {
      sendAppHistoric();
    });

    watch(storeQuizIndex, () => {
      sendAppHistoric();
    });

    return {
      storeNomApp,
    };
  },
};
</script>