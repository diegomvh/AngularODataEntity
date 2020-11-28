import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Location, Location as TripPinLocation } from './location.entity';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export interface EventLocation extends TripPinLocation {
  //#region ODataApi Properties
  BuildingInfo?: string;
  //#endregion
}