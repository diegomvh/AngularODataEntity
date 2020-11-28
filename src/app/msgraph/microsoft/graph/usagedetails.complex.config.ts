import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UsageDetails } from './usagedetails.complex';
import { UsageDetailsModel } from './usagedetails.model';
import { UsageDetailsCollection } from './usagedetails.collection';
//#endregion

export const UsageDetailsConfig = {
  name: "usageDetails",
  model: UsageDetailsModel,
  collection: UsageDetailsCollection,
  annotations: [],
  fields: {
    lastAccessedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<UsageDetails>;