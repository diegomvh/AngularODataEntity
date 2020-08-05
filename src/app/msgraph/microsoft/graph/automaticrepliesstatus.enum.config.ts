import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
//#endregion

export const AutomaticRepliesStatusConfig = {
  name: "AutomaticRepliesStatus",
  members: AutomaticRepliesStatus
} as EnumConfig<AutomaticRepliesStatus>;