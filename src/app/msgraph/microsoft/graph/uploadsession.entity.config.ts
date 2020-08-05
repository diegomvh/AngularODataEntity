import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UploadSession } from './uploadsession.entity';
//#endregion

export const UploadSessionConfig = {
  name: "UploadSession",
  annotations: [],
  fields: {
    uploadUrl: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    nextExpectedRanges: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<UploadSession>;