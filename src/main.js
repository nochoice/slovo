import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import 'animate.css'

Vue.config.productionTip = false;
Vue.use(Vuex);

let gameState = {
  name: 'Romankova prvni hra',
  state: 1,
  words: ['Romanek', 'Auto', 'Maminka', 'A', 'B', 'Uff' ],
  selectedWord: 'A',
  charactersSelected: [],
  charactersSelectedPosition: [],
  charactersGenerated: [],
  charactersGeneratedLength: 10,
}

const gameStore =  {
  state: () => (gameState),
  mutations: { 
    charactersRandomGenerate: function(state) {
      const randomCharacter = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      const rest = new Array(state.charactersGeneratedLength - state.selectedWord.length).fill('').map(() => randomCharacter().toUpperCase());
      state.charactersGenerated = [...rest, ...state.selectedWord.split('')].map(c => c.toUpperCase()).sort(() => .5 - Math.random());
    },
    reset: function(state) {
      state.charactersSelected = [];
      state.charactersSelectedPosition = [];
    },
    characterSelect: function(state, position) {
      if (state.charactersSelectedPosition.includes(position)) return;

      state.charactersSelected.push(state.charactersGenerated[position]);
      state.charactersSelectedPosition.push(position);
    },
    setWord: function(state, word) {
      state.selectedWord = word;
      store.commit('reset');
      store.commit('charactersRandomGenerate')
    }
  },
  actions: {  },
  getters: {
    areWordsSame: (state) => {
      return state.charactersSelected.join('').toLowerCase() === state.selectedWord.toLowerCase()
    }
   }
}

const appStore = {
  state: () => ({
    state: 'INTRO',
    games: [gameState]
  }),
  mutations: {
    newGame: (stateWrap, gameName) => {
      const ng = JSON.parse(JSON.stringify(gameState));
      ng.name = gameName;
      stateWrap.games.push(ng);
    },
    backToIntro: (state) => {
      state.state = 'INTRO'
    },
    setAppState: (state, enumState) => state.state = enumState
  },
  actions: {  
    selectGame: (state, index) => {
      state.rootState.game = state.state.games[index];
      state.commit('setAppState', 'PLAYING');
    }
  },
  getters: {
    getGame: state => {
      return state.games[state.gameSelected];
    }
   }
}

const store = new Vuex.Store({
  modules: {
    game: gameStore,
    app: appStore
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
