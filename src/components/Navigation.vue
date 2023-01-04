<template>
  <div class="d-grid d-md-flex justify-content-md-end align-items-center">
    <NumQuestion></NumQuestion>
    <Bouton></Bouton>
  </div>
</template>

<script lang="ts">
import NumQuestion from "@/components/NumQuestion.vue";
import Bouton from "@/components/Bouton.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navigation',
  components: {
    NumQuestion,
    Bouton
  }
}
</script>
