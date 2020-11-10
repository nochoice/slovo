<template>

<v-container>

  <v-row  justify="center">
    <v-col col="12" sm="8" md="10" lg="8">
      <v-card tile>
        <v-card-title class="primary white--text mb-6">
          <v-btn color="white" outlined icon @click="back()" class="mr-4"><v-icon>mdi-keyboard-return</v-icon></v-btn>
          {{ game.name }}
        </v-card-title>
        <v-card-text>
          <WordImage />
        
          <Word 
            v-bind:class="{'animate__animated animate__headShake': isWrongAnswer, 'animate__animated animate__flipOutX': isRightAnswer }"
            class="mb-4" />
          <LetterChoose class="mb-10" />

          <center>
            <v-btn @click="reset()" color="primary" :disabled="!game.charactersSelected.length" tile>Reset</v-btn>
          </center>
        </v-card-text>
      
      </v-card>
    </v-col>
  </v-row>

  <div>
    

    
  </div>


</v-container>
  
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
