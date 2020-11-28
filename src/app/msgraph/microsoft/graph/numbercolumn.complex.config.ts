import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { NumberColumn } from './numbercolumn.complex';
import { NumberColumnModel } from './numbercolumn.model';
import { NumberColumnCollection } from './numbercolumn.collection';
//#endregion

export const NumberColumnConfig = {
  name: "numberColumn",
  model: NumberColumnModel,
  collection: NumberColumnCollection,
  annotations: [],
  fields: {
    decimalPlaces: {type: 'Edm.String'},
    displayAs: {type: 'Edm.String'},
    maximum: {type: 'Edm.Double'},
    minimum: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<NumberColumn>;