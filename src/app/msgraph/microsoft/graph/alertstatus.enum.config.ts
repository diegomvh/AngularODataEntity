import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertStatus } from './alertstatus.enum';
//#endregion

export const AlertStatusConfig = {
  name: "alertStatus",
  members: AlertStatus
} as EnumConfig<AlertStatus>;