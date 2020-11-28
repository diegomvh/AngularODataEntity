import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IncompleteData } from './incompletedata.entity';
import { IncompleteDataModel } from './incompletedata.model';
import { IncompleteDataCollection } from './incompletedata.collection';
//#endregion

export const IncompleteDataConfig = {
  name: "incompleteData",
  open: true,
  model: IncompleteDataModel,
  collection: IncompleteDataCollection,
  annotations: [],
  fields: {
    missingDataBeforeDateTime: {type: 'Edm.DateTimeOffset'},
    wasThrottled: {type: 'Edm.Boolean'}
  }
} as EntityConfig<IncompleteData>;