import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

export const ItemActivityStatConfig = {
  name: "ItemActivityStat",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    access: {type: 'graph.itemActionStat'},
    create: {type: 'graph.itemActionStat'},
    delete: {type: 'graph.itemActionStat'},
    edit: {type: 'graph.itemActionStat'},
    move: {type: 'graph.itemActionStat'},
    isTrending: {type: 'Edm.Boolean'},
    incompleteData: {type: 'graph.incompleteData'},
    activities: {type: 'graph.itemActivity', collection: true, navigation: true}
  }
} as EntityConfig<ItemActivityStat>;