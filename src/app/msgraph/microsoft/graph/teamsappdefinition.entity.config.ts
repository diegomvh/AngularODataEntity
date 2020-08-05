import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppDefinition } from './teamsappdefinition.entity';
//#endregion

export const TeamsAppDefinitionConfig = {
  name: "TeamsAppDefinition",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    teamsAppId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<TeamsAppDefinition>;