import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamVisibilityType } from './teamvisibilitytype.enum';
//#endregion

export const TeamVisibilityTypeConfig = {
  name: "teamVisibilityType",
  members: TeamVisibilityType
} as EnumConfig<TeamVisibilityType>;