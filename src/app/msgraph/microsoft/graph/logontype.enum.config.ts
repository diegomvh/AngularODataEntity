import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { LogonType } from './logontype.enum';
//#endregion

export const LogonTypeConfig = {
  name: "LogonType",
  members: LogonType
} as EnumConfig<LogonType>;