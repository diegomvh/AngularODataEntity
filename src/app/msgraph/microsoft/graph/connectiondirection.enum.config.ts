import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConnectionDirection } from './connectiondirection.enum';
//#endregion

export const ConnectionDirectionConfig = {
  name: "connectionDirection",
  members: ConnectionDirection
} as EnumConfig<ConnectionDirection>;