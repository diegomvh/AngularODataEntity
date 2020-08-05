import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface DirectoryObject extends Entity {
  //#region ODataApi Properties
  deletedDateTime?: Date;
  //#endregion
}