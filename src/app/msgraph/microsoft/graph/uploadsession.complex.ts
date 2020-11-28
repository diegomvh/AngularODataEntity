import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface UploadSession {
  //#region ODataApi Properties
  expirationDateTime?: Date;
  nextExpectedRanges?: string[];
  uploadUrl?: string;
  //#endregion
}