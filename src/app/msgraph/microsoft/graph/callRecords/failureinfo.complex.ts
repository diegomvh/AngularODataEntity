import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FailureStage } from './failurestage.enum';
//#endregion

export interface FailureInfo {
  //#region ODataApi Properties
  reason?: string;
  stage: FailureStage;
  //#endregion
}