//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './plan-item.entity';
import { PlanItemModel } from './plan-item.model';
import { PlanItemCollection } from './plan-item.collection';
//#endregion

//#region ODataApiGen Type
export const PublicTransportationType = 'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation';//#endregion
export interface PublicTransportation extends PlanItem {
  //#region ODataApiGen Properties
  SeatNumber?: string;
  //#endregion
}