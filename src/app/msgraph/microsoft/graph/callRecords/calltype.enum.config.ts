import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallType } from './calltype.enum';
//#endregion

export const CallTypeConfig = {
  name: "callType",
  members: CallType
} as EnumConfig<CallType>;