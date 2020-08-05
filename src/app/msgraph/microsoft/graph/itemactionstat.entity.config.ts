import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemActionStat } from './itemactionstat.entity';
//#endregion

export const ItemActionStatConfig = {
  name: "itemActionStat",
  open: true,
  annotations: [],
  fields: {
    actionCount: {type: 'Edm.Int32'},
    actorCount: {type: 'Edm.Int32'}
  }
} as EntityConfig<ItemActionStat>;