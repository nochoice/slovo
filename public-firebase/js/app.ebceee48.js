(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},4358:function(e,t,n){},"43f1":function(e,t,n){"use strict";n("e7f1")},"56d7":function(e,t,n){"use strict";n.r(t);n("99af"),n("cb29"),n("4de4"),n("caad"),n("a15b"),n("d81d"),n("b0c0"),n("ac1f"),n("2532"),n("1276"),n("498a");var r=n("2909"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",{staticClass:"mt-10"},[n("v-container",{staticClass:"wrapper"},["INTRO"===e.gamesState?n("Intro"):e._e(),"PLAYING"===e.gamesState?n("Playing"):e._e(),"CONGRATULATION"===e.gamesState?n("Congratulation"):e._e()],1)],1),n("v-footer",{staticClass:"d-flex justify-center",attrs:{app:""}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("b",[e._v("© Slovo")])])],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"mb-10"},[e._v("Vitejte v hre SLOVO")]),e.isCreateNew?e._e():n("center",{staticClass:"ma-6"},[e.games.length?n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.isCreateNew=!0}}},[e._v("Nova hra")]):e._e(),e.games.length?e._e():n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.isCreateNew=!0}}},[e._v("Vytvorte si novu hru")])],1),e.isCreateNew?n("v-card",{staticClass:"mt-6 mb-6 pb-4"},[n("v-card-title",[e._v("Nova hra")]),n("v-card-text",[n("v-text-field",{attrs:{label:"Nazev hry"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createNewGame()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.createNewGame()}}},[e._v("Vytvorit")]),n("v-btn",{on:{click:function(t){e.isCreateNew=!1,e.name=""}}},[e._v("Zpet")])],1)],1):e._e(),!e.isCreateNew&&e.games.length?n("v-card",{staticClass:"pb-4",attrs:{tile:""}},[n("v-card-title",[e._v("Vase hry")]),e._l(e.games,(function(t,r){return n("v-list-item",{key:t.name,on:{click:function(t){return e.select(r)}}},[n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(t.name)+" ")]),n("v-list-item-subtitle",[e._v(e._s(t.wordsGuessed.length||0)+"/"+e._s(e.wordsCount))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.remove(r)}}},[n("v-icon",{attrs:{color:"red"}},[e._v("mdi-delete")])],1),e.isRefreshAble(t)?n("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.gameRefresh(r)}}},[n("v-icon",{attrs:{color:"green"}},[e._v("mdi-refresh")])],1):e._e()],1)],1)}))],2):e._e()],1)},u=[],l={data:function(){return{name:"",isCreateNew:!1}},methods:{createNewGame:function(){this.$store.dispatch("newGame",this.name)},select:function(e){console.log(e,this.isPlayAble(e)),this.isPlayAble(e)&&this.$store.dispatch("selectGame",e)},remove:function(e){this.$store.dispatch("removeGame",e)},isPlayAble:function(e){return this.wordsCount>this.games[e].wordsGuessed.length&&"FINISHED"!==this.games[e].state},isRefreshAble:function(e){return!1},gameRefresh:function(e){this.$store.commit("gameRefresh",e)}},computed:{games:function(){return this.$store.state.app.games},wordsCount:function(){return this.$store.getters.getWordsCount}}},m=l,d=(n("96f9"),n("2877")),f=n("6544"),h=n.n(f),g=n("8336"),v=n("b0af"),p=n("99d9"),b=n("132d"),_=n("da13"),w=n("1800"),C=n("5d23"),S=n("8654"),y=Object(d["a"])(m,i,u,!1,null,"7b035d90",null),G=y.exports;h()(y,{VBtn:g["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VIcon:b["a"],VListItem:_["a"],VListItemAction:w["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VTextField:S["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex justify-center align-center mb-16"},[n("v-btn",{staticClass:"mr-4",attrs:{elevation:"2",icon:""},on:{click:function(t){return e.back()}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-keyboard-return")])],1),n("h1",[e._v(e._s(e.game.name))])],1),n("v-card",[n("v-card-text",{staticClass:"pt-10 pb-10"},[n("WordImage"),n("Word",{staticClass:"mb-16 animate__fast",class:{"animate__animated animate__shakeX":e.isWrongAnswer,"animate__animated animate__shakeY":e.isRightAnswer}}),n("LetterChoose",{staticClass:"mb-10"}),n("center",[n("v-btn",{attrs:{color:"primary",disabled:!e.game.charactersSelected.length},on:{click:function(t){return e.reset()}}},[e._v("Reset")])],1)],1)],1)],1)},k=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-wrap justify-center"},e._l(e.wordCount,(function(t){return n("v-btn",{key:t,staticClass:"mr-2 ml-2 mb-2",attrs:{color:"primary",elevation:"0"}},[e._v(e._s(e.charactersSelected[t-1]))])})),1)},V=[],x={computed:{gameState:function(){return this.$store.state.game},wordCount:function(){return this.gameState.selectedWord.length},charactersSelected:function(){return this.gameState.charactersSelected}}},j=x,$=(n("57fb"),Object(d["a"])(j,O,V,!1,null,"0b6a24c1",null)),R=$.exports;h()($,{VBtn:g["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("center",[n("div",{staticClass:"d-flex justify-center flex-wrap"},e._l(e.size,(function(t){return n("v-btn",{key:t,staticClass:"mr-2 ml-2 mb-4",attrs:{color:"primary",elevation:"0",outlined:"",disabled:e.charPositionSelected.includes(t-1)},on:{click:function(n){return e.choose(t-1)}}},[e._v(e._s(e.charactersGenerated[t-1]))])})),1)])},N=[],P={methods:{choose:function(e){this.$store.commit("characterSelect",e)}},computed:{charactersGenerated:function(){return this.gameState.charactersGenerated},charPositionSelected:function(){return this.gameState.charactersSelectedPosition},size:function(){return this.gameState.charactersGeneratedLength},gameState:function(){return this.$store.state.game}}},A=P,T=(n("43f1"),Object(d["a"])(A,I,N,!1,null,"a7507d92",null)),L=T.exports;h()(T,{VBtn:g["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("center",[n("v-img",{attrs:{height:"200",contain:"",src:e.imageSrc}})],1)],1)],1)],1)},M=[],F={name:"ImageComponent",computed:{game:function(){return this.$store.state.game},imageSrc:function(){return"/images/guess/".concat(this.game.selectedWordObject.id,".jpg")}}},B=F,D=n("62ad"),J=n("a523"),z=n("adda"),U=n("0fd9"),Y=Object(d["a"])(B,E,M,!1,null,null,null),H=Y.exports;h()(Y,{VCol:D["a"],VContainer:J["a"],VImg:z["a"],VRow:U["a"]});var Z=800,K={components:{Word:R,LetterChoose:L,WordImage:H},data:function(){return{isWrongAnswer:!1,isRightAnswer:!1}},methods:{reset:function(){this.$store.commit("reset")},shuffle:function(){this.$store.commit("charactersRandomGenerate")},back:function(){this.$store.commit("backToIntro")}},computed:{game:function(){return this.$store.state.game},isSame:function(){return this.$store.getters.areWordsSame},areWordsLengthSame:function(){return this.$store.getters.areWordsLengthSame}},watch:{areWordsLengthSame:function(e){var t=this;e&&!this.isSame&&(this.isWrongAnswer=!0,setTimeout((function(){t.reset(),t.isWrongAnswer=!1}),Z))},isSame:function(e){var t=this;e&&(this.isRightAnswer=!0,setTimeout((function(){t.$store.dispatch("rightWordGuessed"),t.isRightAnswer=!1}),Z))}}},q=K,X=(n("87e7"),Object(d["a"])(q,W,k,!1,null,"ecf76126",null)),Q=X.exports;h()(X,{VBtn:g["a"],VCard:v["a"],VCardText:p["b"],VIcon:b["a"]});var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{md:"10"}},[n("v-card",[n("v-card-text",{staticClass:"pt-10 pb-10"},[n("h1",{staticClass:"mb-4"},[e._v("Gratulujeme")]),n("h2",{staticClass:"mb-10"},[e._v("Dosiahli ste maximum "+e._s(e.wordsCount)+" / "+e._s(e.game.wordsGuessed.length))]),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.backToIntro()}}},[e._v("Zpet na hlavni stranku")])],1)],1)],1)],1)],1)},te=[],ne={data:function(){return{}},methods:{backToIntro:function(){this.$store.commit("backToIntro")}},computed:{game:function(){return this.$store.state.game},wordsCount:function(){return this.$store.getters.getWordsCount}}},re=ne,ae=Object(d["a"])(re,ee,te,!1,null,"1df008ed",null),se=ae.exports;h()(ae,{VBtn:g["a"],VCard:v["a"],VCardText:p["b"],VCol:D["a"],VContainer:J["a"],VRow:U["a"]});var oe={name:"App",components:{Playing:Q,Intro:G,Congratulation:se},mounted:function(){this.$store.commit("charactersRandomGenerate")},computed:{isSame:function(){return this.$store.getters.areWordsSame},gamesState:function(){return this.$store.state.app.state},wordsCount:function(){return this.$store.getters.getWordsCount}}},ce=oe,ie=(n("034f"),n("7496")),ue=n("553a"),le=n("f6c4"),me=Object(d["a"])(ce,o,c,!1,null,null,null),de=me.exports;h()(me,{VApp:ie["a"],VContainer:J["a"],VFooter:ue["a"],VMain:le["a"]});var fe=n("f309");a["a"].use(fe["a"]);var he=new fe["a"]({}),ge=n("bfa9"),ve=n("d45d"),pe=(n("77ed"),new ge["a"]({storage:window.localStorage}));a["a"].config.productionTip=!1,a["a"].use(s["a"]);var be=function(e,t){var n=e.filter((function(e){return!t.includes(e.id)}));return n[Math.floor(Math.random()*(n.length-1))]},_e=function(e,t){return e.length<=t.length},we=ve,Ce={name:"",state:"NEW",wordsGuessed:[],selectedWord:"",selectedWordObject:{},charactersSelected:[],charactersSelectedPosition:[],charactersGenerated:[],charactersGeneratedLength:12},Se={state:function(){return Ce},mutations:{charactersRandomGenerate:function(e){var t=function(){var e="abcdefghijklmnopqrstuvwxyz";return e[Math.floor(Math.random()*e.length)]},n=new Array(e.charactersGeneratedLength-e.selectedWord.length).fill("").map((function(){return t().toUpperCase()}));e.charactersGenerated=[].concat(Object(r["a"])(n),Object(r["a"])(e.selectedWord.split(""))).map((function(e){return e.toUpperCase()})).sort((function(){return.5-Math.random()}))},reset:function(e){e.charactersSelected=[],e.charactersSelectedPosition=[]},characterSelect:function(e,t){e.charactersSelectedPosition.includes(t)||(e.charactersSelected.push(e.charactersGenerated[t]),e.charactersSelectedPosition.push(t))},setWord:function(e,t){e.selectedWord=t.value,e.selectedWordObject=t,Ge.commit("reset"),Ge.commit("charactersRandomGenerate")},wordGuessed:function(e,t){e.wordsGuessed.push(t)},gameFinish:function(e){e.state="FINISHED"}},actions:{rightWordGuessed:function(e){e.commit("wordGuessed",e.rootState.game.selectedWordObject.id);var t=_e(we,e.rootState.game.wordsGuessed);t?(e.dispatch("congratulation"),e.commit("gameFinish")):e.dispatch("newRandomWord")},newRandomWord:function(e){e.commit("setWord",be(we,e.rootState.game.wordsGuessed))}},getters:{areWordsSame:function(e){return e.charactersSelected.join("").toLowerCase()===e.selectedWord.toLowerCase()},areWordsLengthSame:function(e){return e.charactersSelected.length===e.selectedWord.length}}},ye={state:function(){return{state:"INTRO",games:[]}},mutations:{newGame:function(e,t){e.games.push(t)},removeGame:function(e,t){e.games=e.games.filter((function(e,n){return n!==t}))},backToIntro:function(e){e.state="INTRO"},startPalying:function(e){e.state="PLAYING"},congratulation:function(e){e.state="CONGRATULATION"},setAppState:function(e,t){e.state=t},gameRefresh:function(e,t){e.games[t].state="REFRESHED"},selectGame:function(e,t){e.game=e.games[t]}},actions:{newGame:function(e,t){var n=JSON.parse(JSON.stringify(Ce));n.name=t.trim(),e.rootState.game=n,e.commit("newGame",n),e.dispatch("newRandomWord"),e.commit("charactersRandomGenerate"),e.commit("startPalying")},selectGame:function(e,t){e.commit("selectGame",t),e.commit("startPalying")},removeGame:function(e,t){e.commit("removeGame",t)},gameRefresh:function(e,t){e.commit("gameRefresh",t),e.dispatch("selectGame",t),e.dispatch("newRandomWord")},congratulation:function(e){e.commit("congratulation")}},getters:{getGame:function(e){return e.games[e.gameSelected]}}},Ge=new s["a"].Store({modules:{game:Se,app:ye},getters:{getWordsCount:function(){return we.length}},plugins:[pe.plugin]});new a["a"]({render:function(e){return e(de)},vuetify:he,store:Ge}).$mount("#app")},"57fb":function(e,t,n){"use strict";n("c7fa")},"85ec":function(e,t,n){},"87e7":function(e,t,n){"use strict";n("d5b9")},"96f9":function(e,t,n){"use strict";n("4358")},c7fa:function(e,t,n){},d45d:function(e){e.exports=JSON.parse('[{"id":1,"value":"Kočka"},{"id":2,"value":"Auto"},{"id":3,"value":"Zupan"},{"id":4,"value":"Boty"},{"id":5,"value":"Kredenc"},{"id":6,"value":"Pes"}]')},d5b9:function(e,t,n){},e7f1:function(e,t,n){}});
//# sourceMappingURL=app.ebceee48.js.map