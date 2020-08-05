import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebApplication } from './webapplication.entity';
//#endregion

export const WebApplicationConfig = {
  name: "webApplication",
  annotations: [],
  fields: {
    homePageUrl: {type: 'Edm.String'},
    redirectUris: {type: 'Edm.String', nullable: false, collection: true},
    logoutUrl: {type: 'Edm.String'},
    implicitGrantSettings: {type: 'graph.implicitGrantSettings'}
  }
} as EntityConfig<WebApplication>;