import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
import { MuteParticipantOperationModel } from './muteparticipantoperation.model';
import { MuteParticipantOperationCollection } from './muteparticipantoperation.collection';
//#endregion

export const MuteParticipantOperationConfig = {
  name: "muteParticipantOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: MuteParticipantOperationModel,
  collection: MuteParticipantOperationCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MuteParticipantOperation>;