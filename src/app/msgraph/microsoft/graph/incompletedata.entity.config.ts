import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IncompleteData } from './incompletedata.entity';
//#endregion

export const IncompleteDataConfig = {
  name: "IncompleteData",
  open: true,
  annotations: [],
  fields: {
    missingDataBeforeDateTime: {type: 'Edm.DateTimeOffset'},
    wasThrottled: {type: 'Edm.Boolean'}
  }
} as EntityConfig<IncompleteData>;