import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalculatedColumn } from './calculatedcolumn.entity';
//#endregion

export const CalculatedColumnConfig = {
  name: "CalculatedColumn",
  annotations: [],
  fields: {
    format: {type: 'Edm.String'},
    formula: {type: 'Edm.String'},
    outputType: {type: 'Edm.String'}
  }
} as EntityConfig<CalculatedColumn>;