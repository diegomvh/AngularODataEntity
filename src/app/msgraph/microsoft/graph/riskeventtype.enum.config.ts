import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RiskEventType } from './riskeventtype.enum';
//#endregion

export const RiskEventTypeConfig = {
  name: "riskEventType",
  members: RiskEventType
} as EnumTypeConfig<RiskEventType>;