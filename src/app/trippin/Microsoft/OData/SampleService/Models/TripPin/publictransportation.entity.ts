import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { PlanItemModel } from './planitem.model';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface PublicTransportation extends PlanItem {
  //#region ODataApi Properties
  SeatNumber?: string;
  //#endregion
}