import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppContentFile } from './mobileappcontentfile.entity';
import { MobileAppContentFileModel } from './mobileappcontentfile.model';
import { MobileAppContentFileCollection } from './mobileappcontentfile.collection';
//#endregion

export const MobileAppContentFileConfig = {
  name: "mobileAppContentFile",
  base: "microsoft.graph.entity",
  model: MobileAppContentFileModel,
  collection: MobileAppContentFileCollection,
  annotations: [],
  fields: {
    azureStorageUri: {type: 'Edm.String'},
    azureStorageUriExpirationDateTime: {type: 'Edm.DateTimeOffset'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    isCommitted: {type: 'Edm.Boolean', nullable: false},
    manifest: {type: 'Edm.Binary'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    sizeEncrypted: {type: 'Edm.Int64', nullable: false},
    uploadState: {type: 'graph.mobileAppContentFileUploadState', nullable: false}
  }
} as EntityConfig<MobileAppContentFile>;