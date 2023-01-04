<script lang="ts">
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";
import store from "@/store";
import {mapState} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Question',
  computed: mapState(['storeQuizIndex']),
  watch: {
    storeQuizIndex() {
      store.state.storeQuestionCourante = TAB_QUIZ[store.state.storeQuizIndex].question;
    }
  }
}

</script>

<style>

</style>

<template>
  <div id ="questions" class="container pb-1 pt-2">
    <h3 id="question">
      {{$store.state.storeQuestionCourante}}
    </h3>
  </div>
</template>


