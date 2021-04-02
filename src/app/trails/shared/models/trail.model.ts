import { Coord } from "./coord.model";
import { steps } from "./step.mock";
import { Step } from "./step.model";

export class Trail {

    id: number = 1;
    name: string = 'Parcours 1';
    difficulty: string = 'Très Facile';
    numberOfSteps: number = 5;
    userTime: string = '55:00';
    userCoords: Coord = { lat:45.75088103377126, lon:4.849269398152356 };
    trailTime: string = '58:00';
    isFinished: Boolean = false;
    arrayOfSteps: Step[] = steps;
    description: string = '';
}