import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
//#endregion

export const WorkforceIntegrationSupportedEntitiesConfig = {
  name: "workforceIntegrationSupportedEntities",
  flags: true,
  members: WorkforceIntegrationSupportedEntities
} as EnumConfig<WorkforceIntegrationSupportedEntities>;