import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationModel } from './airportlocation.model';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

export interface Airport {
  //#region ODataApi Properties
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
  //#endregion
}