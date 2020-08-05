import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedInsight } from './sharedinsight.entity';
//#endregion

export const SharedInsightConfig = {
  name: "sharedInsight",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastShared: {type: 'graph.sharingDetail'},
    sharingHistory: {type: 'graph.sharingDetail', collection: true},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    resourceReference: {type: 'graph.resourceReference'},
    lastSharedMethod: {type: 'graph.entity', navigation: true},
    resource: {type: 'graph.entity', navigation: true}
  }
} as EntityConfig<SharedInsight>;