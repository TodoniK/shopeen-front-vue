import type {ReferentielQuestion} from "./ReferentielQuestion";

export class DomaineMesure {
    etape = 0;
    section = '';

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
    }

    private majEtape(quiz: Array<ReferentielQuestion>, index:number){
        this.etape = quiz[index].etape;
    }

    private majSection(quiz: Array<ReferentielQuestion>, index:number){
        this.section = quiz[index].section;
    }

    majEtapeEtSection(quiz: Array<ReferentielQuestion>, index:number){
        this.majEtape(quiz,index);
        this.majSection(quiz,index);
    }
}