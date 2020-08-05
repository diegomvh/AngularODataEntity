import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosCertificateProfile } from './ioscertificateprofile.entity';
//#endregion

export const IosCertificateProfileConfig = {
  name: "IosCertificateProfile",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<IosCertificateProfile>;