<template>
  <div class="hello">
    <h1>Vitejte na soutezi zavody konu</h1>

    <div v-for="(game, index) in games" :key="game.name">
      <div @click="select(index)">
        {{ game.name }}
      </div>
    </div>
    <button @click="create()">Vytvorte si kone</button>
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
    create: function() {
      this.$store.commit('newGame', this.name);
    },
    select: function(index) {
      this.$store.commit('selectGame', index);
    }
  },
  computed: {
    games: function() {
      console.log('asda', this.$store)
      return this.$store.state.game.games
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
