import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemActionStat } from './itemactionstat.complex';
import { ItemActionStatModel } from './itemactionstat.model';
import { ItemActionStatCollection } from './itemactionstat.collection';
//#endregion

export const ItemActionStatConfig = {
  name: "itemActionStat",
  open: true,
  model: ItemActionStatModel,
  collection: ItemActionStatCollection,
  annotations: [],
  fields: {
    actionCount: {type: 'Edm.Int32'},
    actorCount: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<ItemActionStat>;