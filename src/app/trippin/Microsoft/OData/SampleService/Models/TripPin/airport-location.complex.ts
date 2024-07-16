//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Point } from 'geojson';
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

//#region ODataApiGen Type
export const AirportLocationType = 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation';//#endregion
export interface AirportLocation extends Location {
  //#region ODataApiGen Properties
  Loc: Point;
  //#endregion
}