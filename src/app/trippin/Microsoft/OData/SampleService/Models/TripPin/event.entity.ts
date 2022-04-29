//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
import { PlanItemModel } from './planitem.model';
import { EventLocationCollection } from './eventlocation.collection';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface Event extends PlanItem {
  //#region ODataApiGen Properties
  Description?: string;
  OccursAt: EventLocation;
  //#endregion
}