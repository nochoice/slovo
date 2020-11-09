<template>
  <v-container>
     <v-row>
      <v-col>
        <center>
          <v-img
            height="200"
              contain
            :src="imageSrc"
          ></v-img>
        </center>
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
