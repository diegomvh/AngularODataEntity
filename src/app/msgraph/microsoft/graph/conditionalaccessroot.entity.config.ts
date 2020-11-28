import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { ConditionalAccessRootModel } from './conditionalaccessroot.model';
import { ConditionalAccessRootCollection } from './conditionalaccessroot.collection';
//#endregion

export const ConditionalAccessRootConfig = {
  name: "conditionalAccessRoot",
  base: "microsoft.graph.entity",
  model: ConditionalAccessRootModel,
  collection: ConditionalAccessRootCollection,
  annotations: [],
  fields: {
    namedLocations: {type: 'graph.namedLocation', collection: true, navigation: true},
    policies: {type: 'graph.conditionalAccessPolicy', collection: true, navigation: true}
  }
} as EntityConfig<ConditionalAccessRoot>;