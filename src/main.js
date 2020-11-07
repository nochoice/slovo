import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuex);

const game = {
  state: () => ({
    name: 'Name',
    state: 1,
    words: [],
    selectedWord: 'PEJSEK',
    charactersSelected: [],
    charactersSelectedPosition: [],
    charactersGenerated: [],
    charactersGeneratedLength: 14,
  }),
  mutations: { 
    charactersRandomGenerate: function(state) {
        const randomCharacter = () => {
          const alphabet = "abcdefghijklmnopqrstuvwxyz";
          return alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        const rest = new Array(state.charactersGeneratedLength - state.selectedWord.length).fill('').map(() => randomCharacter().toUpperCase());
        state.charactersGenerated = [...rest, ...state.selectedWord.split('')].sort(() => .5 - Math.random());
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
    areWordsSame: state => {
      return state.charactersSelected.join('').toLowerCase() === state.selectedWord.toLowerCase()
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
