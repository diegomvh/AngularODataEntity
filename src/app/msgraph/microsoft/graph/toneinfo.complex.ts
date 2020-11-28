import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Tone } from './tone.enum';
//#endregion

export interface ToneInfo {
  //#region ODataApi Properties
  sequenceId: number;
  tone: Tone;
  //#endregion
}