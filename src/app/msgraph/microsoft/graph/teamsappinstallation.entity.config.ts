import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppInstallation } from './teamsappinstallation.entity';
//#endregion

export const TeamsAppInstallationConfig = {
  name: "TeamsAppInstallation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    teamsApp: {type: 'graph.teamsApp', navigation: true},
    teamsAppDefinition: {type: 'graph.teamsAppDefinition', navigation: true}
  }
} as EntityConfig<TeamsAppInstallation>;