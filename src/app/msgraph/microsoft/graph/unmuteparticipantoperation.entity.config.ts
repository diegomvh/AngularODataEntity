import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UnmuteParticipantOperation } from './unmuteparticipantoperation.entity';
//#endregion

export const UnmuteParticipantOperationConfig = {
  name: "unmuteParticipantOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<UnmuteParticipantOperation>;