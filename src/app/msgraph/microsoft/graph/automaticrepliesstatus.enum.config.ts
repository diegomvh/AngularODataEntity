import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
//#endregion

export const AutomaticRepliesStatusConfig = {
  name: "automaticRepliesStatus",
  members: AutomaticRepliesStatus
} as EnumTypeConfig<AutomaticRepliesStatus>;