//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.entity';
//#endregion

export interface Event extends PlanItem {
  //#region ODataApi Properties
  Description?: string;
  OccursAt: EventLocation;
  //#endregion
}