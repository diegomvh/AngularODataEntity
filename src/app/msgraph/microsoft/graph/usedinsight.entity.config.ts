import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UsedInsight } from './usedinsight.entity';
//#endregion

export const UsedInsightConfig = {
  name: "usedInsight",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastUsed: {type: 'graph.usageDetails'},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resourceReference: {type: 'graph.resourceReference'},
    resource: {type: 'graph.entity', navigation: true}
  }
} as EntityConfig<UsedInsight>;