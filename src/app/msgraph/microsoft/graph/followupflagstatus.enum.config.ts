import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
//#endregion

export const FollowupFlagStatusConfig = {
  name: "followupFlagStatus",
  members: FollowupFlagStatus
} as EnumTypeConfig<FollowupFlagStatus>;