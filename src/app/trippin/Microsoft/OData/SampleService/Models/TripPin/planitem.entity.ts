import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PlanItem {
  //#region ODataApi Properties
  planItemId: number;
  confirmationCode?: string;
  startsAt?: Date;
  endsAt?: Date;
  duration?: Duration;
  //#endregion
}