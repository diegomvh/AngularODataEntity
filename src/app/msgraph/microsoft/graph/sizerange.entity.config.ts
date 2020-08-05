import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SizeRange } from './sizerange.entity';
//#endregion

export const SizeRangeConfig = {
  name: "SizeRange",
  annotations: [],
  fields: {
    minimumSize: {type: 'Edm.Int32'},
    maximumSize: {type: 'Edm.Int32'}
  }
} as EntityConfig<SizeRange>;