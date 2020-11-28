import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemActivityStat } from './itemactivitystat.entity';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export const ItemActivityStatConfig = {
  name: "itemActivityStat",
  base: "microsoft.graph.entity",
  open: true,
  model: ItemActivityStatModel,
  collection: ItemActivityStatCollection,
  annotations: [],
  fields: {
    access: {type: 'graph.itemActionStat'},
    create: {type: 'graph.itemActionStat'},
    delete: {type: 'graph.itemActionStat'},
    edit: {type: 'graph.itemActionStat'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    incompleteData: {type: 'graph.incompleteData'},
    isTrending: {type: 'Edm.Boolean'},
    move: {type: 'graph.itemActionStat'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    activities: {type: 'graph.itemActivity', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ItemActivityStat>;