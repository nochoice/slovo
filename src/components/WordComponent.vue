<template>
  <div class="word">
    <div v-for="i in wordCount" :key="i">
      {{ input[i-1]  }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Word',
  props: {
    word: String,
    input: Array
  },
  computed: {
    wordCount: function() {
      return this.word.length
    }
  }
}
</script>

<style lang="scss" scoped>
.word {
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
  }
}
</style>

