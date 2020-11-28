import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosCertificateProfile } from './ioscertificateprofile.entity';
import { IosCertificateProfileModel } from './ioscertificateprofile.model';
import { IosCertificateProfileCollection } from './ioscertificateprofile.collection';
//#endregion

export const IosCertificateProfileConfig = {
  name: "iosCertificateProfile",
  base: "microsoft.graph.deviceConfiguration",
  model: IosCertificateProfileModel,
  collection: IosCertificateProfileCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<IosCertificateProfile>;