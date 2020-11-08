<template>
  <div v-bind:class="{ 'word animate__animated animate__shakeX': true }">
    <div v-for="i in wordCount" :key="i">
      {{ charactersSelected[i-1]  }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    wordCount: function() {
      return this.$store.getters.getGame.selectedWord.length
    },
    charactersSelected: function() {
      return this.$store.getters.getGame.charactersSelected
    }
  }
}
</script>

<style lang="scss" scoped>
.word {
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
  }
}
</style>

