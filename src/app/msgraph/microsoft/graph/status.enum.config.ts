import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Status } from './status.enum';
//#endregion

export const StatusConfig = {
  name: "status",
  members: Status
} as EnumConfig<Status>;