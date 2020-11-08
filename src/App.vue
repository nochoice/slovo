<template>
  <div id="app">
    <Intro v-if="gamesState === 'INTRO'"/>
    <Playing  v-if="gamesState === 'PLAYING'"/>
    
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
  data() {
    return {
    }
  },
  methods: {
    
  },
  computed: {
    isSame: function() {
      return this.$store.getters.areWordsSame;
    },
    gamesState: function() {
      return this.$store.state.game.gamesState;
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
