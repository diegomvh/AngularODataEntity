//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airport-location.complex';
import { AirportLocationModel } from './airport-location.model';
import { AirportLocationCollection } from './airport-location.collection';
//#endregion

//#region ODataApiGen Type
export const AirportType = 'Microsoft.OData.SampleService.Models.TripPin.Airport';//#endregion
export interface Airport {
  //#region ODataApiGen Properties
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation;
  //#endregion
}