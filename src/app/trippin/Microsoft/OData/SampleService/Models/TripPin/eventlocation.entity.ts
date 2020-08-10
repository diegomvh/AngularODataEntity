import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export interface EventLocation extends Location {
  //#region ODataApi Properties
  BuildingInfo?: string;
  //#endregion
}