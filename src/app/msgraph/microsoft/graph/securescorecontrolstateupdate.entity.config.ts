import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.entity';
import { SecureScoreControlStateUpdateModel } from './securescorecontrolstateupdate.model';
import { SecureScoreControlStateUpdateCollection } from './securescorecontrolstateupdate.collection';
//#endregion

export const SecureScoreControlStateUpdateConfig = {
  name: "secureScoreControlStateUpdate",
  model: SecureScoreControlStateUpdateModel,
  collection: SecureScoreControlStateUpdateCollection,
  annotations: [],
  fields: {
    assignedTo: {type: 'Edm.String'},
    comment: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    updatedBy: {type: 'Edm.String'},
    updatedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<SecureScoreControlStateUpdate>;