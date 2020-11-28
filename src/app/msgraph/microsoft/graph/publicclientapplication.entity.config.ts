import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicClientApplication } from './publicclientapplication.entity';
import { PublicClientApplicationModel } from './publicclientapplication.model';
import { PublicClientApplicationCollection } from './publicclientapplication.collection';
//#endregion

export const PublicClientApplicationConfig = {
  name: "publicClientApplication",
  model: PublicClientApplicationModel,
  collection: PublicClientApplicationCollection,
  annotations: [],
  fields: {
    redirectUris: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<PublicClientApplication>;