import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
//#endregion

export const FollowupFlagStatusConfig = {
  name: "followupFlagStatus",
  members: FollowupFlagStatus
} as EnumConfig<FollowupFlagStatus>;