<template>
<v-container>
  <v-row justify="center">
    <v-col cols="10" sm="6" md="4" xl="3" class="mb-8">
      <v-img max-height="130" contain src="../assets/logo.png"></v-img>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col col="12" sm="8" md="6" lg="4">
      <div class="text-center mb-10" v-if="!isCreateNew">
          <v-btn @click="isCreateNew = true" color="primary" v-if="games.length" tile>Nová hra</v-btn>
          <v-btn @click="isCreateNew = true" xLarge color="primary" v-if="!games.length" tile class="mt-16">Vytvořte si novú hru</v-btn>
      </div>

      <v-card class="mb-6 pb-4" v-if="isCreateNew" tile>
        <v-card-title class="primary white--text mb-6">Nová hra</v-card-title>
        <v-card-text>
          <v-text-field label="Název hry" v-model="name" v-on:keyup.enter="createNewGame()"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="createNewGame()" color="primary" tile>Vytvořit</v-btn>
          <v-btn @click="isCreateNew = false; name = ''" tile>Zpět</v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-if="!isCreateNew && games.length" tile>
        <v-card-title class="primary white--text">Vaše hry</v-card-title>
        <v-list-item v-for="(game, index) in games" :key="game.name" @click="select(index)">
          <v-list-item-content>
            <v-list-item-title>{{ game.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ game.wordsGuessed.length || 0 }}/{{ wordsCount }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="remove(index)"><v-icon color="red darken-3" >mdi-delete</v-icon></v-btn>
            <v-btn icon v-if="isRefreshAble(game)" @click.stop="gameRefresh(index)"><v-icon color="green" >mdi-refresh</v-icon></v-btn>
        </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</v-container>
  
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

</style>
