import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderThreatAction } from './defenderthreataction.enum';
//#endregion

export const DefenderThreatActionConfig = {
  name: "DefenderThreatAction",
  members: DefenderThreatAction
} as EnumConfig<DefenderThreatAction>;