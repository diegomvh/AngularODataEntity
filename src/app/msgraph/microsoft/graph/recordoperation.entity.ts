import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CommsOperation } from './commsoperation.entity';
//#endregion

export interface RecordOperation extends CommsOperation {
  //#region ODataApi Properties
  recordingLocation?: string;
  recordingAccessToken?: string;
  //#endregion
}