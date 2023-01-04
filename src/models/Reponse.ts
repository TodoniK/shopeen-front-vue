import store from "@/store";
import {ReferentielReponse} from "@/models/ReferentielReponse";

export class Reponse{

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
    }

    remplirInput(idQuestion: string){

        const input = document.getElementById('input') as HTMLInputElement

        for(let i = 0; i <= store.state.storeTabReponses.length; i++)
        {
            if(typeof store.state.storeTabReponses[i] != 'undefined')
            {
                if(store.state.storeTabReponses[i].id == idQuestion)
                {
                    input.value = store.state.storeTabReponses[i].reponse;
                    break;
                }
                else
                {
                    input.value = ''
                }
            }
        }
    }

    chercherIndex(idQuestion:string){

        let resultat = -1;

        const tabReponses: Array<ReferentielReponse> = store.state.storeTabReponses

        for(let i =0; i < tabReponses.length; i++)
        {
            if(tabReponses[i].id == idQuestion)
            {
                resultat = i;
                break;
            }
        }

        return resultat;
    }

    remplirTableauReponses(reponse:number, idQuestion:string){

        const nvTableauReponses: Array<ReferentielReponse> = store.state.storeTabReponses

        if(this.chercherIndex(idQuestion) != -1)
        {
            nvTableauReponses[this.chercherIndex(idQuestion)].reponse = reponse;
        }
        else
        {
            nvTableauReponses.push({
                id: idQuestion,
                reponse: reponse
            })
        }

        store.state.storeTabReponses = nvTableauReponses
    }

    checkBeforeSubmit(idQuestion:string,inputValue:number)
    {
        let returnValue = -1;

        if(inputValue.toString() != '')
        {
            if(inputValue >= 0 && inputValue <= 999)
            {
                this.remplirTableauReponses(inputValue, idQuestion);
                document.getElementById("input").classList.remove("is-invalid")
                document.getElementById("input-alert").style.display = "none"

                returnValue = 0
            }
            else
            {
                document.getElementById("input").classList.add("is-invalid")
                document.getElementById("input-alert").style.display = "block"
            }
        }
        else
        {
            document.getElementById("input").classList.add("is-invalid")
            document.getElementById("input-alert").style.display = "block"
        }

        return returnValue
    }
}