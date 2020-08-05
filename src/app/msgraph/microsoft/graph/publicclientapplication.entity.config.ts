import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicClientApplication } from './publicclientapplication.entity';
//#endregion

export const PublicClientApplicationConfig = {
  name: "PublicClientApplication",
  annotations: [],
  fields: {
    redirectUris: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<PublicClientApplication>;