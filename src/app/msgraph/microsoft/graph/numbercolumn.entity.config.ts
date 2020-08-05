import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NumberColumn } from './numbercolumn.entity';
//#endregion

export const NumberColumnConfig = {
  name: "numberColumn",
  annotations: [],
  fields: {
    decimalPlaces: {type: 'Edm.String'},
    displayAs: {type: 'Edm.String'},
    maximum: {type: 'Edm.Double'},
    minimum: {type: 'Edm.Double'}
  }
} as EntityConfig<NumberColumn>;