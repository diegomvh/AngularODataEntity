import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallState } from './callstate.enum';
//#endregion

export const CallStateConfig = {
  name: "callState",
  members: CallState
} as EnumTypeConfig<CallState>;