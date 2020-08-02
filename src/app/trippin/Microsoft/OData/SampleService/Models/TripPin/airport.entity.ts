import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
//#endregion

export interface Airport {
  //#region ODataApi Properties
  icaoCode: string;
  name: string;
  iataCode: string;
  location: AirportLocation;
  //#endregion
}