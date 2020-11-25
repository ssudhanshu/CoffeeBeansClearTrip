import { FlightsPageObjects } from './FlightsPageObjects';

interface FlightsPagesInterface {

    flightScreenObj: FlightsPageObjects
}

export module FlightsPagesInterface {

    export class AlertPage extends FlightsPageObjects { }
    export function getAllPageObjects(): FlightsPagesInterface {
        return {
            flightScreenObj: new FlightsPageObjects()
        }
    }
}
