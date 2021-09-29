//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './planitem.entity';
import { PlanItemModel } from './planitem.model';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export interface PublicTransportation extends PlanItem {
  //#region ODataApiGen Properties
  SeatNumber?: string;
  //#endregion
}