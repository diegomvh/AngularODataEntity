import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { TeamsAppInstallationModel } from './teamsappinstallation.model';
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
//#endregion

export const TeamsAppInstallationConfig = {
  name: "teamsAppInstallation",
  base: "microsoft.graph.entity",
  model: TeamsAppInstallationModel,
  collection: TeamsAppInstallationCollection,
  annotations: [],
  fields: {
    teamsApp: {type: 'graph.teamsApp', navigation: true},
    teamsAppDefinition: {type: 'graph.teamsAppDefinition', navigation: true}
  }
} as StructuredTypeConfig<TeamsAppInstallation>;