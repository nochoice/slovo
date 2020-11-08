import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import 'animate.css'

Vue.config.productionTip = false;
Vue.use(Vuex);

let gameStateBluePrint = {
  name: 'Romankova prvni hra',
  state: 1,
  words: [],
  selectedWord: 'OKNO',
  charactersSelected: [],
  charactersSelectedPosition: [],
  charactersGenerated: [],
  charactersGeneratedLength: 10,
}

const game = {
  state: () => ({
    gameSelected: 0,
    gamesState: 'INTRO',
    games: [gameStateBluePrint]
  }),
  mutations: { 
    charactersRandomGenerate: function(stateWrap) {
      const state = stateWrap.games[stateWrap.gameSelected];

      const randomCharacter = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      const rest = new Array(state.charactersGeneratedLength - state.selectedWord.length).fill('').map(() => randomCharacter().toUpperCase());
      state.charactersGenerated = [...rest, ...state.selectedWord.split('')].map(c => c.toUpperCase()).sort(() => .5 - Math.random());
    },
    reset: function(stateWrap) {
      const state = stateWrap.games[stateWrap.gameSelected];

      state.charactersSelected = [];
      state.charactersSelectedPosition = [];
    },
    characterSelect: function(stateWrap, position) {
      const state = stateWrap.games[stateWrap.gameSelected];

      if (state.charactersSelectedPosition.includes(position)) return;

      state.charactersSelected.push(state.charactersGenerated[position]);
      state.charactersSelectedPosition.push(position);
    },
    setWord: function(stateWrap, word) {
      const state = stateWrap.games[stateWrap.gameSelected];

      state.selectedWord = word;

      store.commit('reset');
      store.commit('charactersRandomGenerate')
    },
    newGame: function(stateWrap, gameName) {
      const ng = JSON.parse(JSON.stringify(gameStateBluePrint));
      ng.name = gameName;
      stateWrap.games.push(ng);
    },
    selectGame: function(stateWrap, index) {
      stateWrap.gameSelected = index;
      stateWrap.gamesState = 'PLAYING'
    },
    backToIntro: function(state) {
      state.gamesState = 'INTRO'
    }
  },
  actions: {  },
  getters: {
    areWordsSame: stateWrap => {
      const state = stateWrap.games[stateWrap.gameSelected];
      return state.charactersSelected.join('').toLowerCase() === state.selectedWord.toLowerCase()
    },
    getGame: stateWrap => {
      return stateWrap.games[stateWrap.gameSelected];
    }
   }
}


const store = new Vuex.Store({
  modules: {
    game
  },
  mutations: {
    
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
