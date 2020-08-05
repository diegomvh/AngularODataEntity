import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseProcessingState } from './licenseprocessingstate.entity';
//#endregion

export const LicenseProcessingStateConfig = {
  name: "LicenseProcessingState",
  annotations: [],
  fields: {
    state: {type: 'Edm.String'}
  }
} as EntityConfig<LicenseProcessingState>;