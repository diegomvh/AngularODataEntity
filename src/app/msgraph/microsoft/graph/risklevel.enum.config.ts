import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RiskLevel } from './risklevel.enum';
//#endregion

export const RiskLevelConfig = {
  name: "RiskLevel",
  members: RiskLevel
} as EnumConfig<RiskLevel>;