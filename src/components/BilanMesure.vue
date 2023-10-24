<template>
  <div id="mesures" class="row pb-5 px-2" style="align-items: center">
    <div class="col-md-4">
      <Mesure
          :nomMesure="'Consommation énergétique'"
          :qtMesure="bilanEnergy"
          :uniteMesure="'kwH'"
      ></Mesure>
    </div>
    <div class="col-md-4">
      <Mesure
          :nomMesure="'Consommation carbonique'"
          :qtMesure="bilanCO2"
          :uniteMesure="'kgeqCO2'"
      ></Mesure>
    </div>
    <div class="col-md-4">
      <Mesure
          :nomMesure="'Consommation économique'"
          :qtMesure="bilanEco"
          :uniteMesure="'€'"
      ></Mesure>
    </div>
  </div>
</template>

<script>
import { computed, watch, onMounted } from "vue";
import Mesure from "./Mesure.vue";
import { useStore } from "vuex";

export default {
  components: {
    Mesure,
  },
  setup() {
    const store = useStore();
    const storeBilan = computed(() => store.state.bilan);
    const storeQuizIndex = computed(() => store.state.quizIndex);

    let bilanEnergy = storeBilan.value.bilanKwh;
    let bilanCO2 = storeBilan.value.bilanKgeqCO2;
    let bilanEco = storeBilan.value.bilanEuro;

    async function majAffichage() {
      await storeBilan.value.majValeurs();
      bilanEnergy = storeBilan.value.bilanKwh;
      bilanCO2 = storeBilan.value.bilanKgeqCO2;
      bilanEco = storeBilan.value.bilanEuro;
    }

    onMounted(() => {
      majAffichage();
    });

    watch(storeQuizIndex, () => {
      majAffichage();
    });

    return {
      bilanEnergy,
      bilanCO2,
      bilanEco,
    };
  },
};
</script>