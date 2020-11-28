import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LogonType } from './logontype.enum';
//#endregion

export const LogonTypeConfig = {
  name: "logonType",
  members: LogonType
} as EnumTypeConfig<LogonType>;