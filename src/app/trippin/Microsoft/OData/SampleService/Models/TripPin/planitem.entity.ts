//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface PlanItem {
  //#region ODataApiGen Properties
  PlanItemId: number;
  ConfirmationCode?: string;
  StartsAt?: Date;
  EndsAt?: Date;
  Duration?: Duration;
  //#endregion
}