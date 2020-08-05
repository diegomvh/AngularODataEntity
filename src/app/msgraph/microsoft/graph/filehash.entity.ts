import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FileHashType } from './filehashtype.enum';
//#endregion

export interface FileHash {
  //#region ODataApi Properties
  hashType?: FileHashType;
  hashValue?: string;
  //#endregion
}