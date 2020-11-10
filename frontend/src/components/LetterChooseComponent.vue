<template>
  <center>
    <div class="d-flex justify-center flex-wrap">
      <v-btn v-for="i in size" :key="i" @click="choose(i-1)" color="primary" tile outlined :disabled="charPositionSelected.includes(i-1)" class="mr-2 ml-2 mb-4">{{ charactersGenerated[i-1] }}</v-btn>
    </div>
  </center>
</template>

<script>
export default {
  methods: {
    choose: function(position) {
      this.$store.commit('characterSelect', position);
    } 
  },
  computed: {
    charactersGenerated: function() {
      return this.gameState.charactersGenerated
    },
    charPositionSelected: function() {
      return this.gameState.charactersSelectedPosition
    },
    size: function() {
      return this.gameState.charactersGeneratedLength
    },
    gameState: function() {
      return this.$store.state.game
    },
  }
}
</script>

<style lang="scss" scoped>
.letter-choose {
  $size: 40px;
  display: flex;
  justify-content: center;

  & > div {
    border: 2px solid rgb(36, 194, 128);
    height: $size;
    width: $size;
    text-align: center;
    line-height: $size;
    margin: 0 4px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>

