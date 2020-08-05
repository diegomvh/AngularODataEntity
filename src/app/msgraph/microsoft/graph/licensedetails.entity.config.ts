import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseDetails } from './licensedetails.entity';
//#endregion

export const LicenseDetailsConfig = {
  name: "licenseDetails",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    servicePlans: {type: 'graph.servicePlanInfo', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'},
    skuPartNumber: {type: 'Edm.String'}
  }
} as EntityConfig<LicenseDetails>;