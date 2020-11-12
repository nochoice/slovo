<template>
  <v-app>
    <v-main>
      <!-- <v-container>
        <v-row>
          <v-col> -->
            <Intro v-if="gamesState === 'INTRO'"/>
            <Playing v-if="gamesState === 'PLAYING'"/>
            <Congratulation v-if="gamesState === 'CONGRATULATION'"/>
          <!-- </v-col>
        </v-row>

      </v-container> -->
    </v-main>
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
#app {
  background-color: #0b8613;
  background-image: url('./assets/bg.png');
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>
