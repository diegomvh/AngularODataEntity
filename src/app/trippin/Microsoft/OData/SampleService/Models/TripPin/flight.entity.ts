import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
import { AirlineModel } from './airline.model';
import { AirportModel } from './airport.model';
import { PublicTransportationModel } from './publictransportation.model';
import { AirlineCollection } from './airline.collection';
import { AirportCollection } from './airport.collection';
import { PublicTransportationCollection } from './publictransportation.collection';
//#endregion

export interface Flight extends PublicTransportation {
  //#region ODataApi Properties
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline;
  //#endregion
}