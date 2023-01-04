import type {ReferentielQuestion} from "./ReferentielQuestion";
import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";

export class Question {
    texte = '';

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
    }

    getQuestionActuelle(tabQuestions: Array<ReferentielQuestion>, index: number){

        this.texte = tabQuestions[index].question;

        return this.texte;
    }

    getIdFromQuestion(question: string){
        let i = 0;
        let id = null;

        while(i < TAB_QUIZ.length)
        {
            if(TAB_QUIZ[i].question == question)
            {
                id = TAB_QUIZ[i].id
            }
            i++
        }

        return id;
    }
}