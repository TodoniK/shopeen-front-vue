<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import store from "@/store";
import {mapState} from "vuex";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    },
    plugins: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  data() {
    return {
      renderComponent: true,
      chartData: {
        labels: ['Consommation de MyShop en trois données'],
        datasets: [
          {
            label: 'Consommation énergétique',
            data: [store.state.storeBilanEnergy],
            backgroundColor: [
              'rgba(255, 134,159,0.4)',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(255, 134, 159, 1)',
            ],
          },
          {
            label: 'Consommation carbonique',
            data: [store.state.storeBilanCO2],
            backgroundColor: [
              'rgba(98,  182, 239,0.4)',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(98,  182, 239, 1)',
            ],
          },
          {
            label: 'Consommation économique',
            data: [store.state.storeBilanEco],
            backgroundColor: [
              'rgba(255, 218, 128,0.4)',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(255, 218, 128, 1)',
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    async forceRerender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

      // Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent = true;

      console.log("passe")
    }
  },
  computed: mapState(['storeBilanEnergy']),
  watch: {
    storeBilanEnergy() {
      let bilanEnergy = store.state.storeBilanEnergy
      this.forceRerender()
    }
  },
}
</script>

<template>
  <Bar
      v-if="renderComponent"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>
