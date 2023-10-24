<template>
  <div>
    <h3>{{ texteSelecteur }}</h3>

    <form>
      <div class="form-group">
        <select v-model="appSelected" class="form-control form-control-empty" id="input1" aria-labelledby="label1">
          <option class="label-option-hidden" value="" disabled="" selected=""></option>
          <option v-for="(app, index) in TAB_APP" :key="index" :value="index">{{ app }}</option>
        </select>
        <label id="label1" class="form-control-placeholder" for="input1">Sélectionnez votre application</label>
        <div class="alert-container alert-container-sm alert-danger invalid-feedback">
          <p class="alert">
            <span class="alert-icon" aria-hidden="true"></span>
            <label class="ob1-alert-title" id="invalid-feedback1" for="input1">Erreur de sélection</label>
          </p>
        </div>
      </div>
    </form>

    <button class="btn btn-primary active float-center" type="button" @click="fillAppName">Go !</button>
  </div>
</template>

<script>
import { TAB_APP } from "@/referentiel/ApplicationList";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      appSelected: null,
    };
  },
  props: {
    texteSelecteur: String,
  },
  computed: {
    TAB_APP() {
      return TAB_APP
    },
    ...mapState(["nomApp"]),
  },
  methods: {
    ...mapMutations(["setNomApp"]),
    fillAppName() {
      this.setNomApp(TAB_APP[this.appSelected]);
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>