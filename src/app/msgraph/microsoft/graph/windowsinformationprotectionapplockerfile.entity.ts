import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface WindowsInformationProtectionAppLockerFile extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  fileHash?: string;
  file?: ArrayBuffer;
  version?: string;
  //#endregion
}