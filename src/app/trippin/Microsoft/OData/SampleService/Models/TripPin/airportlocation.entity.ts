import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Point } from 'geojson';
import { Location, Location as TripPinLocation } from './location.entity';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export interface AirportLocation extends TripPinLocation {
  //#region ODataApi Properties
  Loc: Point;
  //#endregion
}