<template>
  <v-container>
     <v-row justyfy="center">
      <v-col>
        <v-img height="150" contain :src="imageSrc"></v-img>
      </v-col>
     </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ImageComponent',
    computed: {
      game: function() {
        return this.$store.state.game
      },
      imageSrc: function() {
        return `/images/guess/${this.game.selectedWordObject.id}.jpg`
      }
    }
  }
</script>
