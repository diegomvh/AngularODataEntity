import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OfficeGraphInsights } from './officegraphinsights.entity';
//#endregion

export const OfficeGraphInsightsConfig = {
  name: "OfficeGraphInsights",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    trending: {type: 'graph.trending', collection: true, navigation: true},
    shared: {type: 'graph.sharedInsight', collection: true, navigation: true},
    used: {type: 'graph.usedInsight', collection: true, navigation: true}
  }
} as EntityConfig<OfficeGraphInsights>;