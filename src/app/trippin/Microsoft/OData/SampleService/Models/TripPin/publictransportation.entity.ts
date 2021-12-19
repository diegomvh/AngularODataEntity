//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './planitem.entity';
//#endregion

export interface PublicTransportation extends PlanItem {
  //#region ODataApiGen Properties
  SeatNumber?: string;
  //#endregion
}