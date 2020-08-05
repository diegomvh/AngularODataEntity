import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertSeverity } from './alertseverity.enum';
//#endregion

export const AlertSeverityConfig = {
  name: "AlertSeverity",
  members: AlertSeverity
} as EnumConfig<AlertSeverity>;