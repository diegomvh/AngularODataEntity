import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsAppCollection } from './teamsapp.collection';
//#endregion

export const TeamsAppConfig = {
  name: "teamsApp",
  base: "microsoft.graph.entity",
  model: TeamsAppModel,
  collection: TeamsAppCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    distributionMethod: {type: 'graph.teamsAppDistributionMethod'},
    externalId: {type: 'Edm.String'},
    appDefinitions: {type: 'graph.teamsAppDefinition', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TeamsApp>;