import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderCloudBlockLevelType } from './defendercloudblockleveltype.enum';
//#endregion

export const DefenderCloudBlockLevelTypeConfig = {
  name: "defenderCloudBlockLevelType",
  members: DefenderCloudBlockLevelType
} as EnumConfig<DefenderCloudBlockLevelType>;