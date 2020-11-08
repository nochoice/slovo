<template>
  <div id="app">
     <!-- v-if="gamesState === 'PLAYING'" -->
     <!-- v-if="gamesState === 'INTRO'" -->
    <Intro />
    <Playing />

    <br>
    <br>
    <br>
    <br>

    -- {{isSame}} -- {{gamesState}}

  </div>
</template>

<script>
import Intro from './components/IntroComponent.vue';
import Playing from './components/PlayingComponent.vue';

export default {
  name: 'App',
  components: {
    Playing,
    Intro
  },
  mounted: function() {
    console.log(this.$store)
    this.$store.commit('charactersRandomGenerate')
  },
  computed: {
    isSame: function() {
      return this.$store.getters.areWordsSame;
    },
    gamesState: function() {
      return this.$store.state.app.state;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
