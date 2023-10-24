<template>
  <bar-chart :data="chartData" :options="chartOptions"></bar-chart>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import {Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Chart} from 'chart.js';
import { useStore } from "vuex";
import {Bar} from "vue-chartjs";

Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

export default {
  components: {
    BarChart: Bar,
  },
  setup() {
    const store = useStore();
    const chartData = ref(null);

    const chartOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Consommation annuelle de ' + store.state.nomApp,
        },
      },
    });

    const bilanCO2 = ref(0);
    const bilanEco = ref(0);
    const bilanEnergy = ref(0);

    const updateData = () => {
      bilanCO2.value = store.state.bilan.bilanKgeqCO2;
      bilanEco.value = store.state.bilan.bilanEuro;
      bilanEnergy.value = store.state.bilan.bilanKwh;

      chartData.value = {
        labels: ['Consommation totale'],
        datasets: [
          {
            label: 'Energie consommée',
            data: [bilanEnergy.value],
            backgroundColor: ['rgba(255, 134, 159, 0.4)'],
            borderWidth: 2,
            borderColor: ['rgba(255, 134, 159, 1)'],
          },
          {
            label: 'CO2 produit',
            data: [bilanCO2.value],
            backgroundColor: ['rgba(98, 182, 239, 0.4)'],
            borderWidth: 2,
            borderColor: ['rgba(98, 182, 239, 1)'],
          },
          {
            label: 'Coût financier',
            data: [bilanEco.value],
            backgroundColor: ['rgba(255, 218, 128, 0.4)'],
            borderWidth: 2,
            borderColor: ['rgba(255, 218, 128, 1)'],
          },
        ],
      };
    };

    onMounted(() => {
      updateData();
    });

    watch(() => store.state.quizIndex, () => {
      updateData();
    });

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>