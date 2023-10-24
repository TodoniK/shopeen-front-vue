<template>
  <div class="row px-1">
    <button
        id="btn_second"
        class="btn btn-secondary mx-2"
        type="button"
        @click="questionPrec"
    >
      Précédent
    </button>

    <button
        id="btn_suivant"
        class="btn btn-primary"
        type="button"
        @click="sendResponse"
    >
      Suivant
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["quizIndex"]),
  },
  methods: {
    ...mapMutations(["questionPrec", "sendResponse", "fillInput"]),
  },
};
</script>