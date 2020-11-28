import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebApplication } from './webapplication.entity';
import { WebApplicationModel } from './webapplication.model';
import { WebApplicationCollection } from './webapplication.collection';
//#endregion

export const WebApplicationConfig = {
  name: "webApplication",
  model: WebApplicationModel,
  collection: WebApplicationCollection,
  annotations: [],
  fields: {
    homePageUrl: {type: 'Edm.String'},
    implicitGrantSettings: {type: 'graph.implicitGrantSettings'},
    logoutUrl: {type: 'Edm.String'},
    redirectUris: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<WebApplication>;