import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedLicense } from './assignedlicense.entity';
//#endregion

export const AssignedLicenseConfig = {
  name: "assignedLicense",
  annotations: [],
  fields: {
    disabledPlans: {type: 'Edm.Guid', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'}
  }
} as EntityConfig<AssignedLicense>;