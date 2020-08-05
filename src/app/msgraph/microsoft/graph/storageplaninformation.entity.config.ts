import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { StoragePlanInformation } from './storageplaninformation.entity';
//#endregion

export const StoragePlanInformationConfig = {
  name: "StoragePlanInformation",
  annotations: [],
  fields: {
    upgradeAvailable: {type: 'Edm.Boolean'}
  }
} as EntityConfig<StoragePlanInformation>;