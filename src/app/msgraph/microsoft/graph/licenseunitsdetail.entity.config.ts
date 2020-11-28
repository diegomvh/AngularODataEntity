import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
import { LicenseUnitsDetailModel } from './licenseunitsdetail.model';
import { LicenseUnitsDetailCollection } from './licenseunitsdetail.collection';
//#endregion

export const LicenseUnitsDetailConfig = {
  name: "licenseUnitsDetail",
  model: LicenseUnitsDetailModel,
  collection: LicenseUnitsDetailCollection,
  annotations: [],
  fields: {
    enabled: {type: 'Edm.Int32'},
    suspended: {type: 'Edm.Int32'},
    warning: {type: 'Edm.Int32'}
  }
} as EntityConfig<LicenseUnitsDetail>;