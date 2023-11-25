<template>
  <div>
    <PokemonPage/>
  </div>
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue';
export default {
  name: 'App',
  components: {
    PokemonPage,
}
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
  text-align: center;
}
</style>
