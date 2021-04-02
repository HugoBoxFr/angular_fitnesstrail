import { Coord } from "./coord.model";
import { Description } from "./description.model";

export class Step {
    stepID: number = 1;
    stepCoords: Coord = new Coord();
    isChecked: boolean = false;
    icon: string = '';
    description: Description = new Description();
}
