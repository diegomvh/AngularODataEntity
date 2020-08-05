import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
//#endregion

export const LicenseAssignmentStateConfig = {
  name: "LicenseAssignmentState",
  annotations: [],
  fields: {
    skuId: {type: 'Edm.Guid'},
    disabledPlans: {type: 'Edm.Guid', collection: true},
    assignedByGroup: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    error: {type: 'Edm.String'}
  }
} as EntityConfig<LicenseAssignmentState>;