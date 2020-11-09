<template>
  <div>
    <div class="d-flex justify-center align-center mb-16">
      <v-btn elevation="2" icon @click="back()" class="mr-4"><v-icon dark>mdi-keyboard-return</v-icon></v-btn>
      <h1>{{ game.name }}</h1>
    </div>

    <v-card>
      <v-card-text class="pt-10 pb-10">

        <WordImage />
        
        <Word 
          v-bind:class="{'animate__animated animate__shakeX': isWrongAnswer, 'animate__animated animate__shakeY': isRightAnswer }"
          class="mb-16 animate__fast" />
          <LetterChoose class="mb-16" />

          <center>
            <v-btn @click="reset()" color="primary" :disabled="!game.charactersSelected.length">Reset</v-btn>
          </center>
        </v-card-text>
      
      </v-card>
  </div>
</template>

<script>
  import Word from './WordComponent.vue';
  import LetterChoose from './LetterChooseComponent.vue';
  import WordImage from './ImageComponent.vue';

const TIME_INTERACTION = 800;

export default {
  components: {
      Word,
      LetterChoose,
      WordImage
  },
  data() {
    return {
      isWrongAnswer: false,
      isRightAnswer: false
    }
  },
  methods: {
    reset: function() {
      this.$store.commit('reset')
    },
    shuffle: function() {
      this.$store.commit('charactersRandomGenerate')
    },
    back: function() {
      this.$store.commit('backToIntro');
    }
  },
  computed: {
    game: function() {
      return this.$store.state.game
    },
    isSame: function() {
      return this.$store.getters.areWordsSame;
    },
    areWordsLengthSame: function() {
      return this.$store.getters.areWordsLengthSame;
    }
  },
  watch: {
    areWordsLengthSame: function(val) {
      if (val && !this.isSame) {
        this.isWrongAnswer = true
        setTimeout(() => {
          this.reset();
          this.isWrongAnswer = false;
        }, TIME_INTERACTION)
      }
    },
    isSame: function(val) {
      if (!val)  return;
      this.isRightAnswer = true

      setTimeout(() => {
          // this.setWord();
          this.$store.dispatch('rightWordGuessed');
          this.isRightAnswer = false;
        }, TIME_INTERACTION)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
}
</style>
