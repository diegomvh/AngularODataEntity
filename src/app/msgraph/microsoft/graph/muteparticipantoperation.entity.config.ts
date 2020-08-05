import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
//#endregion

export const MuteParticipantOperationConfig = {
  name: "MuteParticipantOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MuteParticipantOperation>;