<template>
  <div class="col-12 bg-gray2" id="App">

    <Quiz></Quiz>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quiz from "@/components/Quiz.vue";

export default defineComponent({
  name: 'App',
  components: {
    Quiz
  }
});
</script>

<style>
</style>