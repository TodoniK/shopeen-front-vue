<template>
    <div class="col-md-4">
      <a class="ob1-card d-block p-1">
        <h3 class="mb-0 text-center">{{nomMesure}}</h3>
        <div class="d-flex justify-content-center">
          <div class="ob1-price ob1-price-compact" >
            <p aria-hidden="true">
              <span class="ob1-price-amount">{{this.qtMesure}}</span>
              <span class="ob1-price-by-month">{{uniteMesure}}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
</template>

<script lang="ts">
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Mesure',
      props: ['nomMesure','qtMesure','uniteMesure']
    }
</script>

<style>

</style>




