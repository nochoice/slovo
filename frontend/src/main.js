import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VuexPersistence from 'vuex-persist';
import W from './words.json';

import 'animate.css'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.config.productionTip = false;
Vue.use(Vuex);

const pickRandomUnique = (words, guessedWords) => {
  let difference = words.filter(x => !guessedWords.includes(x.id));

  return difference[Math.floor(Math.random() * (difference.length - 1))]
}

const isEndOfGame = (words, guessedWords) => words.length <= guessedWords.length;

const WORDS = W;

let gameState = {
  name: '',
  state: 'NEW',
  wordsGuessed: [],
  selectedWord: '',
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
      state.charactersGenerated = [...rest, ...state.selectedWord.split('')].map(c => c.toUpperCase()).sort(() => .5 - Math.random()).sort(() => .5 - Math.random());
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
    },
    gameFinish: (state) => {
      state.state = 'FINISHED'
    }
  },
  actions: {
    rightWordGuessed: (store) => {
      store.commit('wordGuessed', store.rootState.game.selectedWordObject.id);
      const isEnd = isEndOfGame(WORDS, store.rootState.game.wordsGuessed);

      if (isEnd) {
        store.dispatch('congratulation');
        store.commit('gameFinish');
      } else {
        store.dispatch('newRandomWord');
      }
    },
    newRandomWord: (store) => {
      store.commit('setWord', pickRandomUnique(WORDS, store.rootState.game.wordsGuessed)); 
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
    removeGame: (state, index) => {
      state.games = state.games.filter((_, i) => i !== index);
    },
    backToIntro: (state) => {
      state.state = 'INTRO'
    },
    startPalying: (state) => {
      state.state = 'PLAYING'
    },
    congratulation: (state) => {
      state.state = 'CONGRATULATION'
    },
    setAppState: (state, enumState) => {
      state.state = enumState;
    },
    gameRefresh: (state, index) => {
      state.games[index].state = 'REFRESHED'
    },
    selectGame: (state, index) => {
      state.game = state.games[index];
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
      // state.commit('selectGame', index);
      state.rootState.game = state.rootState.app.games[index]
      state.commit('startPalying');
    },
    removeGame: (state, index) => {
      state.commit('removeGame', index)
    },
    gameRefresh: (state, index) => {
      state.commit('gameRefresh', index);
      state.dispatch('selectGame', index);
      state.dispatch('newRandomWord');
    },
    congratulation: (state) => {
      state.commit('congratulation')
    },
  },
  getters: {
    getGame: state => state.games[state.gameSelected]
   }
}

const store = new Vuex.Store({
  modules: {
    game: gameStore,
    app: appStore
  },
  getters: {
    getWordsCount: () => {
      return WORDS.length;
    }
  },
  plugins: [vuexLocal.plugin]
})

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')
