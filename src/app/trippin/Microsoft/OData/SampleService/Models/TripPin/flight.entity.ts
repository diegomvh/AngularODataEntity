//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
//#endregion

export interface Flight extends PublicTransportation {
  //#region ODataApi Properties
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline;
  //#endregion
}