import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
//#endregion

export const ConditionalAccessStatusConfig = {
  name: "ConditionalAccessStatus",
  members: ConditionalAccessStatus
} as EnumConfig<ConditionalAccessStatus>;