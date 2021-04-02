import { Coord } from "./coord.model";
import { Trail } from "./trail.model";

export const trails: Trail[] = [
    {
        id: 1,
        name: 'Parcours 1',
        difficulty: 'Très Facile',
        numberOfSteps: 5,
        userTime: '55:00',
        userCoords: new Coord(),
        trailTime: '58:00',
        isFinished: false,
        arrayOfSteps: [],
        description: "description 1"
    },
    {
        id: 2,
        name: 'Parcours 2',
        difficulty: 'Facile',
        numberOfSteps: 5,
        userTime: '55:00',
        userCoords: new Coord(),
        trailTime: '58:00',
        isFinished: false,
        arrayOfSteps: [],
        description: "description 2"
    },
    {
        id: 3,
        name: 'Parcours 3',
        difficulty: 'Moyenne',
        numberOfSteps: 5,
        userTime: '55:00',
        userCoords: new Coord(),
        trailTime: '58:00',
        isFinished: false,
        arrayOfSteps: [],
        description: "description 3"
    },
]