<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    MainComponent

    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
