import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { ActivityBasedTimeoutPolicyModel } from './activitybasedtimeoutpolicy.model';
import { ActivityBasedTimeoutPolicyCollection } from './activitybasedtimeoutpolicy.collection';
//#endregion

export const ActivityBasedTimeoutPolicyConfig = {
  name: "activityBasedTimeoutPolicy",
  base: "microsoft.graph.stsPolicy",
  model: ActivityBasedTimeoutPolicyModel,
  collection: ActivityBasedTimeoutPolicyCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ActivityBasedTimeoutPolicy>;