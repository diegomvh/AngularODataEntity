import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebApp } from './webapp.entity';
import { WebAppModel } from './webapp.model';
import { WebAppCollection } from './webapp.collection';
//#endregion

export const WebAppConfig = {
  name: "webApp",
  base: "microsoft.graph.mobileApp",
  model: WebAppModel,
  collection: WebAppCollection,
  annotations: [],
  fields: {
    appUrl: {type: 'Edm.String'},
    useManagedBrowser: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WebApp>;