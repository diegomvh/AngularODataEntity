import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UploadSession } from './uploadsession.complex';
import { UploadSessionModel } from './uploadsession.model';
import { UploadSessionCollection } from './uploadsession.collection';
//#endregion

export const UploadSessionConfig = {
  name: "uploadSession",
  model: UploadSessionModel,
  collection: UploadSessionCollection,
  annotations: [],
  fields: {
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    nextExpectedRanges: {type: 'Edm.String', collection: true},
    uploadUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UploadSession>;