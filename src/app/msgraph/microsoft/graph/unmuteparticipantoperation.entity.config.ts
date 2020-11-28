import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UnmuteParticipantOperation } from './unmuteparticipantoperation.entity';
import { UnmuteParticipantOperationModel } from './unmuteparticipantoperation.model';
import { UnmuteParticipantOperationCollection } from './unmuteparticipantoperation.collection';
//#endregion

export const UnmuteParticipantOperationConfig = {
  name: "unmuteParticipantOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: UnmuteParticipantOperationModel,
  collection: UnmuteParticipantOperationCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<UnmuteParticipantOperation>;