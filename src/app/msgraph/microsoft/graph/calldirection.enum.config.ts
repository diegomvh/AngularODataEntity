import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallDirection } from './calldirection.enum';
//#endregion

export const CallDirectionConfig = {
  name: "callDirection",
  members: CallDirection
} as EnumTypeConfig<CallDirection>;