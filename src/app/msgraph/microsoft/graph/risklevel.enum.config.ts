import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RiskLevel } from './risklevel.enum';
//#endregion

export const RiskLevelConfig = {
  name: "riskLevel",
  members: RiskLevel
} as EnumConfig<RiskLevel>;