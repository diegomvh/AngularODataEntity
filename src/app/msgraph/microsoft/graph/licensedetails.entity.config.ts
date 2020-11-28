import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LicenseDetails } from './licensedetails.entity';
import { LicenseDetailsModel } from './licensedetails.model';
import { LicenseDetailsCollection } from './licensedetails.collection';
//#endregion

export const LicenseDetailsConfig = {
  name: "licenseDetails",
  base: "microsoft.graph.entity",
  model: LicenseDetailsModel,
  collection: LicenseDetailsCollection,
  annotations: [],
  fields: {
    servicePlans: {type: 'graph.servicePlanInfo', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'},
    skuPartNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LicenseDetails>;