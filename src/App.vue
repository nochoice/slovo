<template>
  <div id="app">
    <Word />
    <br>
    <br>
    <button @click="reset()">reset</button>
    <button @click="setWord()">Set word</button>
    <br>
    <br>
    <br>
    <LetterChoose />

    <br>
    <br>
    <br>
    <br>

    -- {{isSame}} --

  </div>
</template>

<script>

import Word from './components/WordComponent.vue';
import LetterChoose from './components/LetterChooseComponent.vue';

export default {
  name: 'App',
  components: {
    Word,
    LetterChoose
  },
  mounted: function() {
    this.$store.commit('charactersRandomGenerate')
  },
  data() {
    return {
    }
  },
  methods: {
    reset: function() {
      this.$store.commit('reset')
    },
    setWord: function() {
      this.$store.commit('setWord', 'Uff')
    }
  },
  computed: {
    isSame: function() {
      return this.$store.getters.areWordsSame;
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
