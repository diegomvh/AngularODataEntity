import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WindowsInformationProtectionAppLockerFile extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  file?: ArrayBuffer;
  fileHash?: string;
  version?: string;
  //#endregion
}