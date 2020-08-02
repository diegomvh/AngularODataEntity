import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PlanItem {
  //#region ODataApi Properties
  PlanItemId: number;
  ConfirmationCode?: string;
  StartsAt?: Date;
  EndsAt?: Date;
  Duration?: Duration;
  //#endregion
}