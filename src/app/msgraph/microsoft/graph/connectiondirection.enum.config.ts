import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConnectionDirection } from './connectiondirection.enum';
//#endregion

export const ConnectionDirectionConfig = {
  name: "connectionDirection",
  members: ConnectionDirection
} as EnumTypeConfig<ConnectionDirection>;