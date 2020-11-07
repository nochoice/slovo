<template>
  <div class="letter-choose">
    <div v-for="i in size" :key="i" @click="choose(i-1)">
      <span v-if="!charPositionSelected.includes(i-1)">{{ charactersGenerated[i-1] }}</span>
    </div>
  </div>
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
      return this.$store.state.game.charactersGenerated
    },
    charPositionSelected: function() {
      return this.$store.state.game.charactersSelectedPosition
    }
  },
  data() {
    return {
      size: this.$store.state.game.charactersGeneratedLength
    }
  }
}
</script>

<style lang="scss" scoped>
.letter-choose {
  $size: 30px;
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

