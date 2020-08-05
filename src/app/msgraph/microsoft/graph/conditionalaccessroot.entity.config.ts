import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
//#endregion

export const ConditionalAccessRootConfig = {
  name: "conditionalAccessRoot",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    policies: {type: 'graph.conditionalAccessPolicy', collection: true, navigation: true},
    namedLocations: {type: 'graph.namedLocation', collection: true, navigation: true}
  }
} as EntityConfig<ConditionalAccessRoot>;