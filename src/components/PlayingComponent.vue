<template>
  <div>
    <h1><button @click="back()">Back to intro</button> {{ game.name }}</h1>
    
    <Word />
      <br>
      <br>
      <button @click="reset()">reset</button>
      <button @click="setWord()">Set word</button>
      <button @click="shuffle()">Shuffle</button>
      <br>
      <br>
      <br>
      <LetterChoose />
  </div>
</template>

<script>
  import Word from './WordComponent.vue';
  import LetterChoose from './LetterChooseComponent.vue';

export default {
  components: {
      Word,
      LetterChoose
    },
  methods: {
    reset: function() {
      this.$store.commit('reset')
    },
    setWord: function() {
      this.$store.commit('setWord', ['Romanek', 'Auto', 'Maminka', 'A', 'B', 'Uff' ][Math.round(Math.random() * 5)])
    },
    shuffle: function() {
      this.$store.commit('charactersRandomGenerate')
    },
    back: function() {
      this.$store.commit('backToIntro');
    },

  },
  computed: {
    game: function() {
      return this.$store.state.game
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
