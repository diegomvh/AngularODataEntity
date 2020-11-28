import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
import { LicenseAssignmentStateModel } from './licenseassignmentstate.model';
import { LicenseAssignmentStateCollection } from './licenseassignmentstate.collection';
//#endregion

export const LicenseAssignmentStateConfig = {
  name: "licenseAssignmentState",
  model: LicenseAssignmentStateModel,
  collection: LicenseAssignmentStateCollection,
  annotations: [],
  fields: {
    assignedByGroup: {type: 'Edm.String'},
    disabledPlans: {type: 'Edm.Guid', collection: true},
    error: {type: 'Edm.String'},
    skuId: {type: 'Edm.Guid'},
    state: {type: 'Edm.String'}
  }
} as EntityConfig<LicenseAssignmentState>;