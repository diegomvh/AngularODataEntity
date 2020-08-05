import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LookupColumn } from './lookupcolumn.entity';
//#endregion

export const LookupColumnConfig = {
  name: "lookupColumn",
  annotations: [],
  fields: {
    allowMultipleValues: {type: 'Edm.Boolean'},
    allowUnlimitedLength: {type: 'Edm.Boolean'},
    columnName: {type: 'Edm.String'},
    listId: {type: 'Edm.String'},
    primaryLookupColumnId: {type: 'Edm.String'}
  }
} as EntityConfig<LookupColumn>;