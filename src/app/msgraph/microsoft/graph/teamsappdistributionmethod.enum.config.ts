import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
//#endregion

export const TeamsAppDistributionMethodConfig = {
  name: "teamsAppDistributionMethod",
  members: TeamsAppDistributionMethod
} as EnumConfig<TeamsAppDistributionMethod>;