import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalculatedColumn } from './calculatedcolumn.complex';
import { CalculatedColumnModel } from './calculatedcolumn.model';
import { CalculatedColumnCollection } from './calculatedcolumn.collection';
//#endregion

export const CalculatedColumnConfig = {
  name: "calculatedColumn",
  model: CalculatedColumnModel,
  collection: CalculatedColumnCollection,
  annotations: [],
  fields: {
    format: {type: 'Edm.String'},
    formula: {type: 'Edm.String'},
    outputType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CalculatedColumn>;