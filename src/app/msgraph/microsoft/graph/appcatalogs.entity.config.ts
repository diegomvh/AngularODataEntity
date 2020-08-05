import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppCatalogs } from './appcatalogs.entity';
//#endregion

export const AppCatalogsConfig = {
  name: "appCatalogs",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    teamsApps: {type: 'graph.teamsApp', collection: true, navigation: true}
  }
} as EntityConfig<AppCatalogs>;