import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IncompleteData } from './incompletedata.complex';
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
} as StructuredTypeConfig<IncompleteData>;