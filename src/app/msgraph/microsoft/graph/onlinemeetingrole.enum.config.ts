import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeetingRole } from './onlinemeetingrole.enum';
//#endregion

export const OnlineMeetingRoleConfig = {
  name: "onlineMeetingRole",
  members: OnlineMeetingRole
} as EnumTypeConfig<OnlineMeetingRole>;