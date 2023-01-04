<template>
  <div id="quiz" class="pb-1 pt-5">
    <BilanMesure></BilanMesure>
    <div id="questionnaire" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: block">
      <DomaineMesure></DomaineMesure>
      <Question></Question>
      <Reponse></Reponse>
      <Navigation></Navigation>
    </div>
    <div id="graphe-bilan" class="shadow-lg p-3 mb-5 bg-light rounded mx-2" style="display: none">
      <BilanGraph></BilanGraph>
    </div>
  </div>
</template>

<script lang="ts">
import BilanMesure from "@/components/BilanMesure.vue";
import DomaineMesure from "@/components/DomaineMesure.vue";
import Question from "@/components/Question.vue";
import Reponse from "@/components/Reponse.vue";
import Navigation from "@/components/Navigation.vue";
import BilanGraph from "@/components/BilanGraph.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Quiz',
  components: {
    BilanGraph,
    BilanMesure,
    DomaineMesure,
    Question,
    Reponse,
    Navigation
  }
}
</script>

