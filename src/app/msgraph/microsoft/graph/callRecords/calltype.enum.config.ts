import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallType } from './calltype.enum';
//#endregion

export const CallTypeConfig = {
  name: "callType",
  members: CallType
} as EnumTypeConfig<CallType>;