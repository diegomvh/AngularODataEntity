//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.complex';
//#endregion

export interface Event extends PlanItem {
  //#region ODataApiGen Properties
  Description?: string;
  OccursAt: EventLocation;
  //#endregion
}