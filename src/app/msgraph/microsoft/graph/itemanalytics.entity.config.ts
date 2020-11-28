import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemAnalytics } from './itemanalytics.entity';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
//#endregion

export const ItemAnalyticsConfig = {
  name: "itemAnalytics",
  base: "microsoft.graph.entity",
  open: true,
  model: ItemAnalyticsModel,
  collection: ItemAnalyticsCollection,
  annotations: [],
  fields: {
    allTime: {type: 'graph.itemActivityStat', navigation: true},
    itemActivityStats: {type: 'graph.itemActivityStat', collection: true, navigation: true},
    lastSevenDays: {type: 'graph.itemActivityStat', navigation: true}
  }
} as EntityConfig<ItemAnalytics>;