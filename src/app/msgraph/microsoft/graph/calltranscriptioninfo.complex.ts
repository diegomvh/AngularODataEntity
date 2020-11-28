import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CallTranscriptionState } from './calltranscriptionstate.enum';
//#endregion

export interface CallTranscriptionInfo {
  //#region ODataApi Properties
  lastModifiedDateTime?: Date;
  state: CallTranscriptionState;
  //#endregion
}