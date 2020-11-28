import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UsedInsight } from './usedinsight.entity';
import { UsedInsightModel } from './usedinsight.model';
import { UsedInsightCollection } from './usedinsight.collection';
//#endregion

export const UsedInsightConfig = {
  name: "usedInsight",
  base: "microsoft.graph.entity",
  model: UsedInsightModel,
  collection: UsedInsightCollection,
  annotations: [],
  fields: {
    lastUsed: {type: 'graph.usageDetails'},
    resourceReference: {type: 'graph.resourceReference'},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resource: {type: 'graph.entity', navigation: true}
  }
} as EntityConfig<UsedInsight>;