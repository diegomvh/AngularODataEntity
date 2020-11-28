import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderThreatAction } from './defenderthreataction.enum';
//#endregion

export const DefenderThreatActionConfig = {
  name: "defenderThreatAction",
  members: DefenderThreatAction
} as EnumTypeConfig<DefenderThreatAction>;