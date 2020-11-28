import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OfficeGraphInsights } from './officegraphinsights.entity';
import { OfficeGraphInsightsModel } from './officegraphinsights.model';
import { OfficeGraphInsightsCollection } from './officegraphinsights.collection';
//#endregion

export const OfficeGraphInsightsConfig = {
  name: "officeGraphInsights",
  base: "microsoft.graph.entity",
  model: OfficeGraphInsightsModel,
  collection: OfficeGraphInsightsCollection,
  annotations: [],
  fields: {
    shared: {type: 'graph.sharedInsight', collection: true, navigation: true},
    trending: {type: 'graph.trending', collection: true, navigation: true},
    used: {type: 'graph.usedInsight', collection: true, navigation: true}
  }
} as EntityConfig<OfficeGraphInsights>;