import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.complex';
import { ConditionalAccessConditionSetModel } from './conditionalaccessconditionset.model';
import { ConditionalAccessConditionSetCollection } from './conditionalaccessconditionset.collection';
//#endregion

export const ConditionalAccessConditionSetConfig = {
  name: "conditionalAccessConditionSet",
  model: ConditionalAccessConditionSetModel,
  collection: ConditionalAccessConditionSetCollection,
  annotations: [],
  fields: {
    applications: {type: 'graph.conditionalAccessApplications'},
    clientAppTypes: {type: 'graph.conditionalAccessClientApp', nullable: false, collection: true},
    locations: {type: 'graph.conditionalAccessLocations'},
    platforms: {type: 'graph.conditionalAccessPlatforms'},
    signInRiskLevels: {type: 'graph.riskLevel', nullable: false, collection: true},
    users: {type: 'graph.conditionalAccessUsers', nullable: false}
  }
} as StructuredTypeConfig<ConditionalAccessConditionSet>;