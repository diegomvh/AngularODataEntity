import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Point } from 'geojson';
import { Location } from './location.entity';
//#endregion

export interface AirportLocation extends Location {
  //#region ODataApi Properties
  loc: Point;
  //#endregion
}