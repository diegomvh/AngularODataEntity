import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalculatedColumn } from './calculatedcolumn.entity';
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
} as EntityConfig<CalculatedColumn>;