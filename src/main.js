import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VuexPersistence from 'vuex-persist';

import 'animate.css'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.config.productionTip = false;
Vue.use(Vuex);

const WORDS = [
  {'id': 1, value: 'Kocka'},
  {'id': 2, value: 'Auto'},
  {'id': 3, value: 'Zupan'},
  {'id': 4, value: 'Boty'},
  {'id': 5, value: 'Kredenc'},
  {'id': 6, value: 'Pes'},
]

let gameState = {
  name: '',
  state: 1,
  wordsGuessed: [],
  selectedWord: 'A',
  selectedWordObject: {},
  charactersSelected: [],
  charactersSelectedPosition: [],
  charactersGenerated: [],
  charactersGeneratedLength: 12,
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
    setWord: function(state, wordObj) {
      state.selectedWord = wordObj.value;
      state.selectedWordObject = wordObj;
      store.commit('reset');
      store.commit('charactersRandomGenerate')
    },
    wordGuessed: (state, word) => {
      state.wordsGuessed.push(word);
    }

  },
  actions: {
    rightWordGuessed: (store) => {
      store.commit('wordGuessed', store.rootState.game.selectedWord)
      store.dispatch('newRandomWord');
    },
    newRandomWord: (store) => {
      store.commit('setWord', WORDS[Math.round(Math.random() * WORDS.length - 1)]); 
    }  
  },
  getters: {
    areWordsSame: (state) => {
      return state.charactersSelected.join('').toLowerCase() === state.selectedWord.toLowerCase() 
    },
    areWordsLengthSame: (state) => {
      return (state.charactersSelected.length === state.selectedWord.length)
    }
   }
}

const appStore = {
  state: () => ({
    state: 'INTRO',
    games: []
  }),
  mutations: {
    newGame: (state, game) => {
      state.games.push(game);
    },
    backToIntro: (state) => {
      state.state = 'INTRO'
    },
    startPalying: (state) => {
      state.state = 'PLAYING'
    },
    setAppState: (state, enumState) => {
      state.state = enumState;
      console.log(state)
    }
  },
  actions: {  
    newGame: (state, gameName) => {
      const ng = JSON.parse(JSON.stringify(gameState));
      ng.name = gameName.trim();
      state.rootState.game = ng;

      state.commit('newGame', ng);

      state.dispatch('newRandomWord');
      state.commit('charactersRandomGenerate');

      state.commit('startPalying');
    },
    selectGame: (state, index) => {
      state.rootState.game = state.state.games[index];
      console.log('app store - selectGame')
      state.commit('startPalying');
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
  },
  plugins: [vuexLocal.plugin]
})

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')
