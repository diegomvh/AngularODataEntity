import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SecureScoreControlStateUpdate {
  //#region ODataApi Properties
  assignedTo?: string;
  comment?: string;
  state?: string;
  updatedBy?: string;
  updatedDateTime?: Date;
  //#endregion
}