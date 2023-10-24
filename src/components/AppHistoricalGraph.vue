<template>
  <div>
    <Titre :titre="`La consommation de mon app`" />
    <div id="graphique" class="pb-1 pt-3">
      <div
          v-if="!storeNomApp"
          id="app-selection"
          class="shadow-lg p-3 mb-3 bg-light rounded mx-2"
          style="display: block"
      >
        <ListeApp
            texteSelecteur="Veuillez sélectionner l'application dont vous souhaitez voir l'historique :"
        />
      </div>
      <div v-else class="pb-1 pt-3">
        <div
            id="graph"
            class="shadow-lg p-3 mb-3 bg-light rounded mx-2"
            style="display: block"
        >
          <div id="chart-container">
            <div v-if="isLoading">Remplissage des données</div>
            <fusioncharts
                v-else
                :type="'timeseries'"
                :width="'100%'"
                :height="450"
                :data-source="getChartConfig()"
            />
            <p v-if="loadError" style="color: red">
              Quelque chose ne va pas {{ loadError.message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Timeseries from "fusioncharts/fusioncharts.timeseries";
import Titre from "./Titre.vue";
import ListeApp from "./ListeApp.vue";
import { useStore } from "vuex";
import { ApplicationRequest } from "@/API/ApplicationRequest";

FusionCharts.addDep(Timeseries);

VueFusionCharts.fcRoot(FusionCharts);

export default {
  components: {
    fusioncharts: VueFusionCharts,
    Titre,
    ListeApp,
  },
  setup() {
    const store = useStore();
    const storeNomApp = store.state.storeNomApp;

    const schema = [
      {
        name: "Date",
        type: "date",
        format: "%Y-%-m-%-d",
      },
      {
        name: "Consommation électrique",
        type: "number",
      },
      {
        name: "Production de CO2",
        type: "number",
      },
      {
        name: "Coût financier",
        type: "number",
      },
    ];

    const tab = ref([]);

    const getChartConfig = () => {
      const fusionDataStore = new FusionCharts.DataStore();
      const fusionTable = fusionDataStore.createDataTable(tab.value, schema);

      const dataSource = {
        chart: {
          multicanvas: false,
        },
        caption: {
          text: "Consommation annuelle de " + storeNomApp,
        },
        yaxis: [
          {
            plot: [
              {
                value: "Consommation électrique",
                connectnulldata: true,
                type: "line",
              },
            ],
            format: {
              suffix: " kWh",
            },
          },
          {
            plot: [
              {
                value: "Production de CO2",
                connectnulldata: true,
                type: "line",
              },
            ],
            format: {
              suffix: " kgeqCO2",
            },
          },
          {
            plot: [
              {
                value: "Coût financier",
                connectnulldata: true,
                type: "line",
              },
            ],
            format: {
              suffix: " €",
            },
          },
        ],
      };
      dataSource.data = fusionTable;

      return dataSource;
    };

    const isLoading = ref(false);
    const loadError = ref(null);

    const fillData = async () => {
      isLoading.value = true;
      try {
        const response = await ApplicationRequest.getApplicationHistoricByName(
            storeNomApp
        );
        tab.value = response.map((item) => [
          item.measurementDate,
          item.bilanEnergy,
          item.bilanCO2,
          item.bilanEuro,
        ]);
      } catch (error) {
        loadError.value = error;
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fillData();
    });

    return {
      storeNomApp,
      getChartConfig,
      isLoading,
      loadError,
    };
  },
};
</script>