import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Hashes } from './hashes.complex';
import { HashesModel } from './hashes.model';
import { HashesCollection } from './hashes.collection';
//#endregion

export interface File {
  //#region ODataApi Properties
  hashes?: Hashes;
  mimeType?: string;
  processingMetadata?: boolean;
  //#endregion
}