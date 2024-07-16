//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Photo } from './photo.entity';
import { PlanItem } from './plan-item.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './plan-item.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './plan-item.collection';
//#endregion

//#region ODataApiGen Type
export const TripType = 'Microsoft.OData.SampleService.Models.TripPin.Trip';//#endregion
export interface Trip {
  //#region ODataApiGen Properties
  TripId: number;
  ShareId?: string;
  Description?: string;
  Name: string;
  Budget: number;
  StartsAt: Date;
  EndsAt: Date;
  Tags: string[];
  Photos?: Photo[];
  PlanItems?: PlanItem[];
  //#endregion
}