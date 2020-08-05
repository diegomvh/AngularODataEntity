import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
//#endregion

export const GroupLifecyclePolicyConfig = {
  name: "GroupLifecyclePolicy",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    groupLifetimeInDays: {type: 'Edm.Int32'},
    managedGroupTypes: {type: 'Edm.String'},
    alternateNotificationEmails: {type: 'Edm.String'}
  }
} as EntityConfig<GroupLifecyclePolicy>;