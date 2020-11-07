<template>
  <div class="letter-choose">
    <div v-for="i in size" :key="i" @click="choose(i-1)">
      <span v-if="!charPositionSelected.includes(i-1)">{{ generatedCharacters[i-1] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    word: String,
    choosedCharacters: Array
  },
  methods: {
    choose: function(position) {
      if (this.charPositionSelected.includes(position)) return;

      this.charPositionSelected.push(position);
      this.choosedCharacters.push(this.generatedCharacters[position]);
    }, 
    randomCharacter: function() {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    } 
  },
  computed: {
    generatedCharacters: function() {
      const rest = new Array(this.size - this.word.length).fill('_').map(() => this.randomCharacter().toUpperCase());

      console.log([...rest, ...this.word.split('')]);
      return [...rest, ...this.word.split('')].sort(() => .5 - Math.random());
    }
  },
  data() {
    return {
      size: 14,
      charPositionSelected: []
    }
  },
  watch: {
    choosedCharacters: function(current) {
      if (current.length === 0) this.charPositionSelected = []; 
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

