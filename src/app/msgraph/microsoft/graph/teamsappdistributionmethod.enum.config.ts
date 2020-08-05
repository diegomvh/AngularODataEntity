import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
//#endregion

export const TeamsAppDistributionMethodConfig = {
  name: "TeamsAppDistributionMethod",
  members: TeamsAppDistributionMethod
} as EnumConfig<TeamsAppDistributionMethod>;