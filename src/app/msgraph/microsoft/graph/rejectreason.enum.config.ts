import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RejectReason } from './rejectreason.enum';
//#endregion

export const RejectReasonConfig = {
  name: "rejectReason",
  members: RejectReason
} as EnumConfig<RejectReason>;