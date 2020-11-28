import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseProcessingState } from './licenseprocessingstate.complex';
import { LicenseProcessingStateModel } from './licenseprocessingstate.model';
import { LicenseProcessingStateCollection } from './licenseprocessingstate.collection';
//#endregion

export const LicenseProcessingStateConfig = {
  name: "licenseProcessingState",
  model: LicenseProcessingStateModel,
  collection: LicenseProcessingStateCollection,
  annotations: [],
  fields: {
    state: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LicenseProcessingState>;