import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export const TeamsAppDefinitionConfig = {
  name: "teamsAppDefinition",
  base: "microsoft.graph.entity",
  model: TeamsAppDefinitionModel,
  collection: TeamsAppDefinitionCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    teamsAppId: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TeamsAppDefinition>;