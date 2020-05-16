//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
//#endregion

export interface Airport {
  //#region ODataApi Properties
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
  //#endregion
}