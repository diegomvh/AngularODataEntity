import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConnectionDirection } from './connectiondirection.enum';
//#endregion

export const ConnectionDirectionConfig = {
  name: "ConnectionDirection",
  members: ConnectionDirection
} as EnumConfig<ConnectionDirection>;