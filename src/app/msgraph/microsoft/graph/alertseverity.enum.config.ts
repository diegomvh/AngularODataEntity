import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertSeverity } from './alertseverity.enum';
//#endregion

export const AlertSeverityConfig = {
  name: "alertSeverity",
  members: AlertSeverity
} as EnumConfig<AlertSeverity>;