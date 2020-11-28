import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FileHash } from './filehash.complex';
import { FileHashModel } from './filehash.model';
import { FileHashCollection } from './filehash.collection';
//#endregion

export interface FileSecurityState {
  //#region ODataApi Properties
  fileHash?: FileHash;
  name?: string;
  path?: string;
  riskScore?: string;
  //#endregion
}