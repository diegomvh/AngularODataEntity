import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppLicensingType } from './vpplicensingtype.entity';
//#endregion

export const VppLicensingTypeConfig = {
  name: "VppLicensingType",
  annotations: [],
  fields: {
    supportsUserLicensing: {type: 'Edm.Boolean', nullable: false},
    supportsDeviceLicensing: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<VppLicensingType>;