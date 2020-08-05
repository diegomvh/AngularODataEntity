import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Hashes } from './hashes.entity';
//#endregion

export interface File {
  //#region ODataApi Properties
  hashes?: Hashes;
  mimeType?: string;
  processingMetadata?: boolean;
  //#endregion
}