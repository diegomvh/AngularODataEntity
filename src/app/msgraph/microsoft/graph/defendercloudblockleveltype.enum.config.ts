import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderCloudBlockLevelType } from './defendercloudblockleveltype.enum';
//#endregion

export const DefenderCloudBlockLevelTypeConfig = {
  name: "defenderCloudBlockLevelType",
  members: DefenderCloudBlockLevelType
} as EnumTypeConfig<DefenderCloudBlockLevelType>;