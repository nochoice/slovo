<template>
  <v-app>
    <v-main class="mt-10">
      <v-container class="wrapper">
        <Intro v-if="gamesState === 'INTRO'"/>
        <Playing v-if="gamesState === 'PLAYING'"/>
        <Congratulation v-if="gamesState === 'CONGRATULATION'"/>

      </v-container>
    </v-main>

    <v-footer app class="d-flex justify-center">
      {{ new Date().getFullYear() }} — <b>© Slovo</b>
    </v-footer>
  </v-app>
</template>

<script>
import Intro from './components/IntroComponent.vue';
import Playing from './components/PlayingComponent.vue';
import Congratulation from './components/CongratulationComponent.vue';

export default {
  name: 'App',
  components: {
    Playing,
    Intro,
    Congratulation
  },
  mounted: function() {
    this.$store.commit('charactersRandomGenerate')
  },
  computed: {
    isSame: function() {
      return this.$store.getters.areWordsSame;
    },
    gamesState: function() {
      return this.$store.state.app.state;
    },
    wordsCount: function() {
      return this.$store.getters.getWordsCount
    }
  }
}
</script>

<style>
@media (min-width: 772px)  {
  .wrapper {
      max-width: 772px !important;
  }
}
</style>
