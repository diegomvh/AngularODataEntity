//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './plan-item.entity';
import { EventLocation } from './event-location.complex';
import { EventLocationModel } from './event-location.model';
import { PlanItemModel } from './plan-item.model';
import { EventLocationCollection } from './event-location.collection';
import { PlanItemCollection } from './plan-item.collection';
//#endregion

//#region ODataApiGen Type
export const EventType = 'Microsoft.OData.SampleService.Models.TripPin.Event';//#endregion
export interface Event extends PlanItem {
  //#region ODataApiGen Properties
  Description?: string;
  OccursAt: EventLocation;
  //#endregion
}