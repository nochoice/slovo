<template>
  <div class="hello">
    <h1>Vitejte v hre SLOVO</h1>

    <div v-for="(game, index) in games" :key="game.name">
      <div @click="select(index)">
        {{ game.name }}
      </div>
    </div>
    <button @click="createNewGame()">Nova hra</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    createNewGame: function() {
      this.$store.commit('newGame', this.name);
    },
    select: function(index) {
      this.$store.dispatch('selectGame', index);
    }
  },
  computed: {
    games: function() {
      return this.$store.state.app.games
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
