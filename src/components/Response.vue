<template>
  <div id="reponse" class="container">
    <form>
      <div class="form-group">
        <input
            type="text"
            id="input"
            class="form-control"
            aria-labelledby="label12 invalid-feedback12"
            aria-describedby="helper12"
            aria-invalid="true"
            v-model="currentInput"
        />
        <label id="label12" class="form-control-placeholder" for="input">Insérer votre valeur</label>

        <div v-if="currentInput !== ''">
          <div v-if="Number(currentInput) < 0 || Number(currentInput) > 999" id="input-alert" class="alert-container alert-container-sm alert-danger invalid-feedback" style="display: block">
            <p class="alert">
              <label class="ob1-alert-title" id="invalid-feedback12" for="input">Veuillez saisir une valeur comprise entre 0 et 999 !</label>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentInput: this.$store.state.currentInput,
    };
  },
  watch: {
    currentInput(newValue) {
      // Réagir aux modifications de currentInput
      this.$store.commit('updateStoreCurrentInput', newValue);
    },
  },
};
</script>