import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem, PlanItem as TripPinPlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.entity';
import { EventLocationModel } from './eventlocation.model';
import { PlanItemModel } from './planitem.model';
import { EventLocationCollection } from './eventlocation.collection';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface Event extends TripPinPlanItem {
  //#region ODataApi Properties
  Description?: string;
  OccursAt: EventLocation;
  //#endregion
}