//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Point } from 'geojson';
import { Location } from './location.complex';
//#endregion

export interface AirportLocation extends Location {
  //#region ODataApiGen Properties
  Loc: Point;
  //#endregion
}