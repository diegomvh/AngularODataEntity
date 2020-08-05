import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface OnenoteEntityBaseModel extends Entity {
  //#region ODataApi Properties
  self?: string;
  //#endregion
}