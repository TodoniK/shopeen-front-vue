<template>
  <div class="row px-1">
    <button id="btn_second" class="btn btn-secondary mx-2" type="button" style="display: none" @click="questionPrec(); verifBoutons(); getValueHistory();">Précédent</button>
    <button id="btn_suivant" class="btn btn-primary" type="button" @click="sendToResponse(); verifBoutons(); getValueHistory();">Suivant</button>
  </div>
</template>

<script lang="ts">

    import {Question} from "../models/Question"
    import {Reponse} from "../models/Reponse";
    import {TAB_QUIZ} from "../referentiel/listeInfosQuiz";
    import store from "@/store";

    let question = new Question();
    let reponse = new Reponse();

    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Bouton',
      methods: {
        verifBoutons() {
          if (store.state.storeQuizIndex == 0) {
            (document.getElementById("btn_second") as HTMLFormElement).style.display = "none";
          } else {
            (document.getElementById("btn_second") as HTMLFormElement).style.display = "block";
          }

          if (store.state.storeQuizIndex == 5) {
            (document.getElementById("btn_suivant") as HTMLFormElement).textContent = "Terminer";
          } else {
            (document.getElementById("btn_suivant") as HTMLFormElement).textContent = "Suivant";
          }
        },
        questionSuiv() {
          if (store.state.storeQuizIndex < TAB_QUIZ.length) {
            store.state.storeQuizIndex = store.state.storeQuizIndex + 1
          }
        },
        questionPrec() {
          if (store.state.storeQuizIndex > 0) {
            store.state.storeQuizIndex = store.state.storeQuizIndex - 1
          }
        },
        getValueHistory() {
          let idQuestion = question.getIdFromQuestion(TAB_QUIZ[store.state.storeQuizIndex].question)
          reponse.remplirInput(idQuestion)
        },
        sendToResponse() {

          const input = document.getElementById('input') as HTMLInputElement
          let inputValue = Number(input.value)
          let idQuestion = question.getIdFromQuestion(document.getElementById("question").textContent)

          if (reponse.checkBeforeSubmit(idQuestion, inputValue) == 0) {
            if (store.state.storeQuizIndex == 5) {
              document.getElementById("questionnaire").style.display = "none"
              document.getElementById("graphe-bilan").style.display = "block"
            } else {
              this.questionSuiv()
            }
          }
        }
      }
    }

</script>

<style>

</style>