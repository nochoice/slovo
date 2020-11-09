<template>
  <div class="hello">
      <h1 class="mb-10">Vitejte v hre SLOVO</h1>

      <center class="ma-6" v-if="!isCreateNew">
          <v-btn @click="isCreateNew = true" color="primary" v-if="games.length">Nova hra</v-btn>
          <v-btn @click="isCreateNew = true" color="primary" v-if="!games.length">Vytvorte si novu hru</v-btn>
      </center>

      <v-card class="mt-6 mb-6 pb-4" v-if="isCreateNew">
        <v-card-title>Nova hra</v-card-title>
        <v-card-text>
          <v-text-field label="Nazev hry" v-model="name" v-on:keyup.enter="createNewGame()"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="createNewGame()" color="primary">Vytvorit</v-btn>
          <v-btn @click="isCreateNew = false; name = ''" >Zpet</v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-if="!isCreateNew && games.length" class="pb-4" tile>
        <v-card-title>Vase hry</v-card-title>
        <v-list-item v-for="(game, index) in games" :key="game.name" @click="select(index)">
          <v-list-item-content >
            <v-list-item-title>
              {{ game.name }} 
            </v-list-item-title>

            <v-list-item-subtitle>{{ game.wordsGuessed.length || 0 }}/{{ wordsCount }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="remove(index)">
              <v-icon color="red" >mdi-delete</v-icon>
            </v-btn>
            <v-btn icon v-if="isRefreshAble(game)" @click.stop="gameRefresh(index)">
              <v-icon color="green" >mdi-refresh</v-icon>
            </v-btn>
            
        </v-list-item-action>
        </v-list-item>
      </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      isCreateNew: false
    }
  },
  methods: {
    createNewGame: function() {
      this.$store.dispatch('newGame', this.name);
    },
    select: function(index) {
      console.log(index, this.isPlayAble(index))
      if (this.isPlayAble(index)) {
        this.$store.dispatch('selectGame', index);
      }
    },
    remove: function(index) {
      this.$store.dispatch('removeGame', index);
    },
    isPlayAble: function(index) {
      return this.wordsCount > this.games[index].wordsGuessed.length && this.games[index].state !== 'FINISHED'
    },
    isRefreshAble: function(game) {
      game;
      return false;
      // return (this.wordsCount > game.wordsGuessed.length) && game.state === 'FINISHED' 
    },
    gameRefresh: function(index) {
      this.$store.commit('gameRefresh', index);
    }
  },
  computed: {
    games: function() {
      return this.$store.state.app.games
    },
    wordsCount: function() {
      return this.$store.getters.getWordsCount
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
}
</style>
