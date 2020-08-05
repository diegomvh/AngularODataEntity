import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
//#endregion

export const LicenseUnitsDetailConfig = {
  name: "licenseUnitsDetail",
  annotations: [],
  fields: {
    enabled: {type: 'Edm.Int32'},
    suspended: {type: 'Edm.Int32'},
    warning: {type: 'Edm.Int32'}
  }
} as EntityConfig<LicenseUnitsDetail>;