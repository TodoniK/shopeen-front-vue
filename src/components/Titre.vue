<template>
  <div class="row fw-bold pt-3 px-3">
    <div class="col-md-6">
      <h2>{{ titre }}</h2>
    </div>
    <Application></Application>
  </div>

  <div class="progressbar px-3">
    <progress max="100" value="100"></progress>
  </div>
</template>

<script>
import Application from "./Application.vue"; // Importez le composant Vue approprié
export default {
  props: {
    titre: String, // Définissez la propriété 'titre' en tant que String
  },
  components: {
    Application, // Incluez le composant Vue 'Application'
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>