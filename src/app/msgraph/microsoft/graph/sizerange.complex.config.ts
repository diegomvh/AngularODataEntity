import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SizeRange } from './sizerange.complex';
import { SizeRangeModel } from './sizerange.model';
import { SizeRangeCollection } from './sizerange.collection';
//#endregion

export const SizeRangeConfig = {
  name: "sizeRange",
  model: SizeRangeModel,
  collection: SizeRangeCollection,
  annotations: [],
  fields: {
    maximumSize: {type: 'Edm.Int32'},
    minimumSize: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<SizeRange>;