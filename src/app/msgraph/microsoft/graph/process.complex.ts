import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ProcessIntegrityLevel } from './processintegritylevel.enum';
import { FileHash } from './filehash.complex';
import { FileHashModel } from './filehash.model';
import { FileHashCollection } from './filehash.collection';
//#endregion

export interface Process {
  //#region ODataApi Properties
  accountName?: string;
  commandLine?: string;
  createdDateTime?: Date;
  fileHash?: FileHash;
  integrityLevel?: ProcessIntegrityLevel;
  isElevated?: boolean;
  name?: string;
  parentProcessCreatedDateTime?: Date;
  parentProcessId?: number;
  parentProcessName?: string;
  path?: string;
  processId?: number;
  //#endregion
}