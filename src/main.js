import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import 'animate.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Vuex);

const words = ['Romanek', 'Auto', 'Maminka', 'A', 'B', 'Uff' ]

let gameState = {
  name: 'Romankova prvni hra',
  state: 1,
  words: words,
  wordsGuessed: [],
  selectedWord: 'A',
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
    setWord: function(state, word) {
      state.selectedWord = word;
      store.commit('reset');
      store.commit('charactersRandomGenerate')
    }
  },
  actions: {
    // selectGame: (store) => {
    //   console.log('game store - selectGame', store)
    // }
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
  }
})

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')
