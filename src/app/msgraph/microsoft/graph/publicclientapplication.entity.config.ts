import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicClientApplication } from './publicclientapplication.entity';
//#endregion

export const PublicClientApplicationConfig = {
  name: "publicClientApplication",
  annotations: [],
  fields: {
    redirectUris: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<PublicClientApplication>;