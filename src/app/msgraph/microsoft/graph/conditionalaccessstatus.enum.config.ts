import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
//#endregion

export const ConditionalAccessStatusConfig = {
  name: "conditionalAccessStatus",
  members: ConditionalAccessStatus
} as EnumTypeConfig<ConditionalAccessStatus>;