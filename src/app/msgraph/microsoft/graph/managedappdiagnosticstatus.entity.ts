import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ManagedAppDiagnosticStatus {
  //#region ODataApi Properties
  validationName?: string;
  state?: string;
  mitigationInstruction?: string;
  //#endregion
}