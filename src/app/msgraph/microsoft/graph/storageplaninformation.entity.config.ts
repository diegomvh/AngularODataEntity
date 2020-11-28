import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { StoragePlanInformation } from './storageplaninformation.entity';
import { StoragePlanInformationModel } from './storageplaninformation.model';
import { StoragePlanInformationCollection } from './storageplaninformation.collection';
//#endregion

export const StoragePlanInformationConfig = {
  name: "storagePlanInformation",
  model: StoragePlanInformationModel,
  collection: StoragePlanInformationCollection,
  annotations: [],
  fields: {
    upgradeAvailable: {type: 'Edm.Boolean'}
  }
} as EntityConfig<StoragePlanInformation>;