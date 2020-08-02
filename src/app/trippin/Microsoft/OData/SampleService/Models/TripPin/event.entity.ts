import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.entity';
//#endregion

export interface Event extends PlanItem {
  //#region ODataApi Properties
  description?: string;
  occursAt: EventLocation;
  //#endregion
}