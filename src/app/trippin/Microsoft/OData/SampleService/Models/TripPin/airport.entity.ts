//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationModel } from './airportlocation.model';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

export interface Airport {
  //#region ODataApiGen Properties
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
  //#endregion
}