import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallDirection } from './calldirection.enum';
//#endregion

export const CallDirectionConfig = {
  name: "CallDirection",
  members: CallDirection
} as EnumConfig<CallDirection>;