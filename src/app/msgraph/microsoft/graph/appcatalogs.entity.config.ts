import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppCatalogs } from './appcatalogs.entity';
import { AppCatalogsModel } from './appcatalogs.model';
import { AppCatalogsCollection } from './appcatalogs.collection';
//#endregion

export const AppCatalogsConfig = {
  name: "appCatalogs",
  base: "microsoft.graph.entity",
  model: AppCatalogsModel,
  collection: AppCatalogsCollection,
  annotations: [],
  fields: {
    teamsApps: {type: 'graph.teamsApp', collection: true, navigation: true}
  }
} as StructuredTypeConfig<AppCatalogs>;