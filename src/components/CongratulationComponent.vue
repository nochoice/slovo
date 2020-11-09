<template>
    <v-container>
     <v-row justify="center">
      <v-col md="10"  class="text-center">
        <v-card>
          <v-card-text class="pt-10 pb-10">
            <h1 class="mb-4">Gratulujeme</h1>
            <h2 class="mb-10">Dosiahli ste maximum {{ wordsCount }} / {{ game.wordsGuessed.length }}</h2>
            <v-btn @click="backToIntro()" color="primary">Zpet na hlavni stranku</v-btn>

          </v-card-text>
        </v-card>
     
      </v-col>
     </v-row>
      
  </v-container>
    
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    backToIntro: function() {
      this.$store.commit('backToIntro');
    }
  },
  computed: {
    game: function() {
      return this.$store.state.game
    },
    wordsCount: function() {
      return this.$store.getters.getWordsCount
    }
  }
}
</script>

<style scoped lang="scss">

</style>
