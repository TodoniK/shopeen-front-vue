<script lang="ts">

    import {mapState} from "vuex";
    import store from "@/store";
    import {TAB_QUIZ} from "@/referentiel/listeInfosQuiz";

    export default {
      name: 'DomaineMesure',
      computed: mapState(['storeQuizIndex']),
      watch: {
        storeQuizIndex() {
          store.state.storeEtapeCourante = TAB_QUIZ[store.state.storeQuizIndex].etape;
          store.state.storeNomSection = TAB_QUIZ[store.state.storeQuizIndex].section;
        }
      }
    }

</script>

<style>

</style>

<template>
  <div id ="section" class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>Etape {{$store.state.storeEtapeCourante}}/{{$store.state.storeEtapeMax}} - {{$store.state.storeNomSection}}</h3>
      </div>
    </div>
  </div>
</template>


