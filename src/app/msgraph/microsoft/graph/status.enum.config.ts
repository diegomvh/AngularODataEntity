import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Status } from './status.enum';
//#endregion

export const StatusConfig = {
  name: "Status",
  members: Status
} as EnumConfig<Status>;