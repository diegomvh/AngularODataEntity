import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
import { GroupLifecyclePolicyModel } from './grouplifecyclepolicy.model';
import { GroupLifecyclePolicyCollection } from './grouplifecyclepolicy.collection';
//#endregion

export const GroupLifecyclePolicyConfig = {
  name: "groupLifecyclePolicy",
  base: "microsoft.graph.entity",
  model: GroupLifecyclePolicyModel,
  collection: GroupLifecyclePolicyCollection,
  annotations: [],
  fields: {
    alternateNotificationEmails: {type: 'Edm.String'},
    groupLifetimeInDays: {type: 'Edm.Int32'},
    managedGroupTypes: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<GroupLifecyclePolicy>;