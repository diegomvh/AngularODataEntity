//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

//#region ODataApiGen Type
export const PlanItemType = 'Microsoft.OData.SampleService.Models.TripPin.PlanItem';//#endregion
export interface PlanItem {
  //#region ODataApiGen Properties
  PlanItemId: number;
  ConfirmationCode?: string;
  StartsAt?: Date;
  EndsAt?: Date;
  Duration?: Duration;
  //#endregion
}