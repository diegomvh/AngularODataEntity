//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airportlocation.complex';
//#endregion

export interface Airport {
  //#region ODataApiGen Properties
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
  //#endregion
}