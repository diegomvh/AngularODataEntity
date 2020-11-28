import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PendingContentUpdate } from './pendingcontentupdate.complex';
import { PendingContentUpdateModel } from './pendingcontentupdate.model';
import { PendingContentUpdateCollection } from './pendingcontentupdate.collection';
//#endregion

export const PendingContentUpdateConfig = {
  name: "pendingContentUpdate",
  model: PendingContentUpdateModel,
  collection: PendingContentUpdateCollection,
  annotations: [],
  fields: {
    queuedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<PendingContentUpdate>;