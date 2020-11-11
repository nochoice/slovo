<template>
  <div class="d-flex flex-wrap justify-center">
    <div class="character mr-2 ml-2 mb-2" v-for="i in wordCount" :key="i">
        {{ charactersSelected[i-1] }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gameState: function() {
      return this.$store.state.game
    },
    wordCount: function() {
      return this.gameState.selectedWord.length
    },
    charactersSelected: function() {
      return this.gameState.charactersSelected
    }
  }
}
</script>

<style lang="scss" scoped>
.character {
  border-bottom: 2px solid #1976d2;
  width: 20px;
  height: 26px;
  text-align: center;
  font-size: 20px;
}
</style>

