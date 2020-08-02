import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
//#endregion

export interface PublicTransportation extends PlanItem {
  //#region ODataApi Properties
  seatNumber?: string;
  //#endregion
}