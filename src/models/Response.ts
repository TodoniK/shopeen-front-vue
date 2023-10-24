// @ts-ignore
import { question, currentInput, quizIndex } from '../store/index'; // Assurez-vous de mettre le bon chemin vers votre store
import { TAB_QUIZ } from '@/referentiel/QuestionList'; // Assurez-vous de mettre le bon chemin vers votre liste de questions
import { ResponseRequest } from '@/API/ResponseRequest'; // Assurez-vous de mettre le bon chemin vers votre API

export interface DataResponse {
    idQuestion: string;
    userResponse: number;
}

export class Response {
    firstEntry = true;

    checkBeforeSubmit(inputValue: number): boolean {
        let returnValue = false;

        if (inputValue >= 0 && inputValue <= 999) {
            this.firstEntry = false;
            returnValue = true;
        }

        return returnValue;
    }

    sendResponse() {
        const idQuestion: string = question.value.getIdFromQuestion(TAB_QUIZ[quizIndex.value].question);
        const userResponse: number = currentInput.value;

        const consoMoy: number = TAB_QUIZ[quizIndex.value].consoMoy;

        if (this.checkBeforeSubmit(userResponse) && quizIndex.value < TAB_QUIZ.length) {
            ResponseRequest.postResponse(idQuestion, userResponse, consoMoy);
            this.questionSuiv();
        }
    }

    fillInput() {
        if (!this.firstEntry) {
            const idQuestion: string = question.value.getIdFromQuestion(TAB_QUIZ[quizIndex.value].question);

            ResponseRequest.getResponseById(idQuestion).then((r) => {
                // @ts-ignore
                return currentInput.value = r.userResponse;
            });
        }
    }

    questionPrec() {
        if (quizIndex.value > 0) {
            quizIndex.value -= 1;
        }
    }

    questionSuiv() {
        if (quizIndex.value < TAB_QUIZ.length) {
            quizIndex.value += 1;
        }
    }
}