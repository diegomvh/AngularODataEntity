import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamSpecialization } from './teamspecialization.enum';
//#endregion

export const TeamSpecializationConfig = {
  name: "teamSpecialization",
  members: TeamSpecialization
} as EnumConfig<TeamSpecialization>;