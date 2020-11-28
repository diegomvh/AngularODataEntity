import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallTranscriptionState } from './calltranscriptionstate.enum';
//#endregion

export const CallTranscriptionStateConfig = {
  name: "callTranscriptionState",
  members: CallTranscriptionState
} as EnumTypeConfig<CallTranscriptionState>;