import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebApp } from './webapp.entity';
//#endregion

export const WebAppConfig = {
  name: "webApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    appUrl: {type: 'Edm.String'},
    useManagedBrowser: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WebApp>;