import Vuex from 'vuex';
import { Question } from "@/models/Question";
import { DomaineMesure } from "@/models/DomaineMesure";
import { Response } from "@/models/Response";
import { Bilan } from "@/models/Bilan";

const store = new Vuex.Store({
    state: {
        quizIndex: 0,
        question: new Question(),
        domaineMesure: new DomaineMesure(),
        reponse: new Response(),
        currentInput: '',
        bilan: new Bilan(),
        nomApp: '',
    },
    mutations: {
        setQuizIndex(state, index) {
            state.quizIndex = index;
        },
        setQuestion(state, question) {
            state.question = question;
        },
        setDomaineMesure(state, domaineMesure) {
            state.domaineMesure = domaineMesure;
        },
        setReponse(state, reponse) {
            state.reponse = reponse;
        },
        setCurrentInput(state, input) {
            state.currentInput = input;
        },
        setBilan(state, bilan) {
            state.bilan = bilan;
        },
        setNomApp(state, nomApp) {
            state.nomApp = nomApp;
        },
    },
});

export default store;