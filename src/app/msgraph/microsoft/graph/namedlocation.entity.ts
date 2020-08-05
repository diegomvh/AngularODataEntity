import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface NamedLocation extends Entity {
  //#region ODataApi Properties
  displayName: string;
  createdDateTime?: Date;
  modifiedDateTime?: Date;
  //#endregion
}