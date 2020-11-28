import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertStatus } from './alertstatus.enum';
//#endregion

export const AlertStatusConfig = {
  name: "alertStatus",
  members: AlertStatus
} as EnumTypeConfig<AlertStatus>;