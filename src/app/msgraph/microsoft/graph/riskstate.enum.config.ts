import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RiskState } from './riskstate.enum';
//#endregion

export const RiskStateConfig = {
  name: "riskState",
  members: RiskState
} as EnumConfig<RiskState>;