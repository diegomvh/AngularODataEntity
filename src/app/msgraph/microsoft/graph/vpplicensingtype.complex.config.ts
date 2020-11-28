import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppLicensingType } from './vpplicensingtype.complex';
import { VppLicensingTypeModel } from './vpplicensingtype.model';
import { VppLicensingTypeCollection } from './vpplicensingtype.collection';
//#endregion

export const VppLicensingTypeConfig = {
  name: "vppLicensingType",
  model: VppLicensingTypeModel,
  collection: VppLicensingTypeCollection,
  annotations: [],
  fields: {
    supportsDeviceLicensing: {type: 'Edm.Boolean', nullable: false},
    supportsUserLicensing: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<VppLicensingType>;