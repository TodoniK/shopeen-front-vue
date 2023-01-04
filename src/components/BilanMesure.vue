<script lang="ts">
import Mesure from "@/components/Mesure.vue";
import {mapState} from "vuex";
import {Bilan} from "@/models/Bilan";
import store from "@/store";
import {TAB_REFERENTIELS} from "@/referentiel/listeReferentiels";

let bilan = new Bilan()

export default {
  name: 'BilanMesure',
  components: {
    Mesure
  },
  props: ['qtMesure'],
  computed: mapState(['storeQuizIndex']),
  watch: {
    storeQuizIndex() {
      bilan.calculerBilans(TAB_REFERENTIELS, store.state.storeTabReponses)
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="mesures" class="row pb-5 px-2" style="align-items: center">
      <Mesure nom-mesure="Consommation énergétique" :qt-mesure="this.$store.state.storeBilanEnergy" unite-mesure="kwH"></Mesure>
      <Mesure nom-mesure="Consommation carbonique" :qt-mesure="this.$store.state.storeBilanCO2" unite-mesure="kgeqCO2"></Mesure>
      <Mesure nom-mesure="Consommation économique" :qt-mesure="this.$store.state.storeBilanEco" unite-mesure="€"></Mesure>
  </div>
</template>


