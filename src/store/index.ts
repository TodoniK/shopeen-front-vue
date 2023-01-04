import { createStore } from 'vuex'
import {TAB_QUIZ} from "@/referentiel/listeInfosQuiz";

export default createStore({
  state: {
    storeTabReponses: [],
    storeQuizIndex: 0,
    storeEtapeCourante: TAB_QUIZ[0].etape,
    storeNomSection: TAB_QUIZ[0].section,
    storeQuestionCourante: TAB_QUIZ[0].question,
    storeBilanCO2: 0,
    storeBilanEnergy: 0,
    storeBilanEco: 0,
    storeEtapeMax: TAB_QUIZ[TAB_QUIZ.length-1].etape
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
