import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UsageDetails } from './usagedetails.entity';
//#endregion

export const UsageDetailsConfig = {
  name: "usageDetails",
  annotations: [],
  fields: {
    lastAccessedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<UsageDetails>;