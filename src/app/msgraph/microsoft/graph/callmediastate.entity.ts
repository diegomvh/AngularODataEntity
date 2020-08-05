import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaState } from './mediastate.enum';
//#endregion

export interface CallMediaState {
  //#region ODataApi Properties
  audio?: MediaState;
  //#endregion
}