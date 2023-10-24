<template>
  <div class="col-12 bg-gray2" id="App">
    <HomepageSwitcher></HomepageSwitcher>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomepageSwitcher from "./components/HomepageSwitcher.vue";

export default defineComponent({
  name: 'App',
  components: {
    HomepageSwitcher
  }
});
</script>

<style>
</style>