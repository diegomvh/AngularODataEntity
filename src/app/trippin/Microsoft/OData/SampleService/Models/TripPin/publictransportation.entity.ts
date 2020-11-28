import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem, PlanItem as TripPinPlanItem } from './planitem.entity';
import { PlanItemModel } from './planitem.model';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface PublicTransportation extends TripPinPlanItem {
  //#region ODataApi Properties
  SeatNumber?: string;
  //#endregion
}