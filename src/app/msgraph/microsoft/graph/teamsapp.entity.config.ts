import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsApp } from './teamsapp.entity';
//#endregion

export const TeamsAppConfig = {
  name: "TeamsApp",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    externalId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    distributionMethod: {type: 'graph.teamsAppDistributionMethod'},
    appDefinitions: {type: 'graph.teamsAppDefinition', collection: true, navigation: true}
  }
} as EntityConfig<TeamsApp>;