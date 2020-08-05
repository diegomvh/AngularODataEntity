import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ClonableTeamParts } from './clonableteamparts.enum';
//#endregion

export const ClonableTeamPartsConfig = {
  name: "clonableTeamParts",
  flags: true,
  members: ClonableTeamParts
} as EnumConfig<ClonableTeamParts>;