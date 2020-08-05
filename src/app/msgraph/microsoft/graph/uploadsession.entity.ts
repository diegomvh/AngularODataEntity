import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface UploadSession {
  //#region ODataApi Properties
  uploadUrl?: string;
  expirationDateTime?: Date;
  nextExpectedRanges?: string[];
  //#endregion
}