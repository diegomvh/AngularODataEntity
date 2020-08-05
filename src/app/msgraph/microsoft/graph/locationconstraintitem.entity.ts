import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export interface LocationConstraintItem extends Location {
  //#region ODataApi Properties
  resolveAvailability?: boolean;
  //#endregion
}