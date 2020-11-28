import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Status } from './status.enum';
//#endregion

export const StatusConfig = {
  name: "status",
  members: Status
} as EnumTypeConfig<Status>;