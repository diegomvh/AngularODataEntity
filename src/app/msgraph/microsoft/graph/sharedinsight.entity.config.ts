import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedInsight } from './sharedinsight.entity';
import { SharedInsightModel } from './sharedinsight.model';
import { SharedInsightCollection } from './sharedinsight.collection';
//#endregion

export const SharedInsightConfig = {
  name: "sharedInsight",
  base: "microsoft.graph.entity",
  model: SharedInsightModel,
  collection: SharedInsightCollection,
  annotations: [],
  fields: {
    lastShared: {type: 'graph.sharingDetail'},
    resourceReference: {type: 'graph.resourceReference'},
    resourceVisualization: {type: 'graph.resourceVisualization'},
    sharingHistory: {type: 'graph.sharingDetail', collection: true},
    lastSharedMethod: {type: 'graph.entity', navigation: true},
    resource: {type: 'graph.entity', navigation: true}
  }
} as EntityConfig<SharedInsight>;