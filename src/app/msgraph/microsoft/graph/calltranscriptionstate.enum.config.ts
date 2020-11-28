import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallTranscriptionState } from './calltranscriptionstate.enum';
//#endregion

export const CallTranscriptionStateConfig = {
  name: "callTranscriptionState",
  members: CallTranscriptionState
} as EnumConfig<CallTranscriptionState>;