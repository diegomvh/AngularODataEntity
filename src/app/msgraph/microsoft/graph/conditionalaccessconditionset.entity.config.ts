import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.entity';
//#endregion

export const ConditionalAccessConditionSetConfig = {
  name: "ConditionalAccessConditionSet",
  annotations: [],
  fields: {
    applications: {type: 'graph.conditionalAccessApplications'},
    users: {type: 'graph.conditionalAccessUsers', nullable: false},
    signInRiskLevels: {type: 'graph.riskLevel', nullable: false, collection: true},
    platforms: {type: 'graph.conditionalAccessPlatforms'},
    locations: {type: 'graph.conditionalAccessLocations'},
    clientAppTypes: {type: 'graph.conditionalAccessClientApp', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessConditionSet>;