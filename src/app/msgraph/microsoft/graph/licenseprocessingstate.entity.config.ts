import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseProcessingState } from './licenseprocessingstate.entity';
//#endregion

export const LicenseProcessingStateConfig = {
  name: "licenseProcessingState",
  annotations: [],
  fields: {
    state: {type: 'Edm.String'}
  }
} as EntityConfig<LicenseProcessingState>;