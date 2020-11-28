import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LookupColumn } from './lookupcolumn.entity';
import { LookupColumnModel } from './lookupcolumn.model';
import { LookupColumnCollection } from './lookupcolumn.collection';
//#endregion

export const LookupColumnConfig = {
  name: "lookupColumn",
  model: LookupColumnModel,
  collection: LookupColumnCollection,
  annotations: [],
  fields: {
    allowMultipleValues: {type: 'Edm.Boolean'},
    allowUnlimitedLength: {type: 'Edm.Boolean'},
    columnName: {type: 'Edm.String'},
    listId: {type: 'Edm.String'},
    primaryLookupColumnId: {type: 'Edm.String'}
  }
} as EntityConfig<LookupColumn>;