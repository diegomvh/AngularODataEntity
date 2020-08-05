import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ProfilePhoto extends Entity {
  //#region ODataApi Properties
  height?: number;
  width?: number;
  //#endregion
}