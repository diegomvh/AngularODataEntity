import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemAnalytics } from './itemanalytics.entity';
//#endregion

export const ItemAnalyticsConfig = {
  name: "ItemAnalytics",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    itemActivityStats: {type: 'graph.itemActivityStat', collection: true, navigation: true},
    allTime: {type: 'graph.itemActivityStat', navigation: true},
    lastSevenDays: {type: 'graph.itemActivityStat', navigation: true}
  }
} as EntityConfig<ItemAnalytics>;