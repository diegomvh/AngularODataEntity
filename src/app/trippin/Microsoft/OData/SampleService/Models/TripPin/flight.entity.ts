import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
//#endregion

export interface Flight extends PublicTransportation {
  //#region ODataApi Properties
  flightNumber: string;
  from?: Airport;
  to?: Airport;
  airline?: Airline;
  //#endregion
}