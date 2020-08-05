import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamVisibilityType } from './teamvisibilitytype.enum';
//#endregion

export const TeamVisibilityTypeConfig = {
  name: "TeamVisibilityType",
  members: TeamVisibilityType
} as EnumConfig<TeamVisibilityType>;