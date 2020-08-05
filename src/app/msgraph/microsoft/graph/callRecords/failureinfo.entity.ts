import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FailureStage } from './failurestage.enum';
//#endregion

export interface FailureInfo {
  //#region ODataApi Properties
  stage: FailureStage;
  reason?: string;
  //#endregion
}