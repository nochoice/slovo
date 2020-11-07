<template>
  <div id="app">
    <Word :word="word" :input="choosedCharacters" />
    <br>
    <br>
    <button @click="reset()">reset</button>
    <br>
    <br>
    <br>
    <LetterChoose :word="word" :choosedCharacters="choosedCharacters" />

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
  data() {
    return {
      word: 'AAS',
      choosedCharacters: []
    }
  },
  methods: {
    reset: function() {
      this.choosedCharacters = []
    }
  },
  computed: {
    isSame: function() {
      return this.choosedCharacters.join('').toLowerCase() === this.word.toLowerCase()
    }
  },
  watch: {
    choosedCharacters: function(current) {
      console.log(current)
      if (current.length >= this.word.length) {
        // this.reset()
      }
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
